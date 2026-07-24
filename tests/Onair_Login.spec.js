import { test, expect } from '@playwright/test';

test('Login functionality with positive case', async ({ page }) => {
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://app-dev.onairad.com/#/otp');
  // await page.pause();
  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
  await page.goto('https://app-dev.onairad.com/#/');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'My Account' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();
  await page.waitForTimeout(3000);
});


test('Login with wrong email & correct password', async ({ page }) => {
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya250@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('The username you entered could not be found.')).toBeVisible();
  await page.waitForTimeout(3000);
});

test('Login with correct email & wrong password', async ({ page }) => {
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Sury');
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Password is not correct')).toBeVisible();
  await page.waitForTimeout(3000);
});

test('Login with wrong email format', async ({ page }) => {
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502gmail.com');
   await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await expect(page.getByText('Make sure your email looks like name@example.com.')).toBeVisible();
   await page.waitForTimeout(3000);
});


test('Invalid OTP', async ({ page }) => {
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://app-dev.onairad.com/#/otp');
  await page.waitForTimeout(5000);
  await page.locator('.otp-input').nth(0).click();
  await page.locator('.otp-input').nth(0).fill('1');

  await page.locator('.otp-input').nth(1).click();
  await page.locator('.otp-input').nth(1).fill('2');

  await page.locator('.otp-input').nth(2).click();
  await page.locator('.otp-input').nth(2).fill('3');

  await page.locator('.otp-input').nth(3).click();
  await page.locator('.otp-input').nth(3).fill('4');

  await page.locator('.otp-input').nth(4).click();
  await page.locator('.otp-input').nth(4).fill('5');

  await page.locator('.otp-input').nth(5).click();
  await page.locator('.otp-input').nth(5).fill('6');
  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
  await page.waitForTimeout(3000);
  await expect(page.locator('.text-error').getByText('Invalid OTP. Generate new OTP.')).toBeVisible();
  await page.waitForTimeout(3000);
});


test('Resend OTP', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://app-dev.onairad.com/#/otp');
  await page.waitForTimeout(30000);
  await page.getByRole('button', { name: 'Resend Code' }).click();
  await expect(page.locator('text=OTP has been sent to:')).toBeVisible();
  await page.waitForTimeout(3000);
});




