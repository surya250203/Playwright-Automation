import { test, expect } from '@playwright/test';

  
test('test', async ({ page }) => {
  await page.goto('https://shop-dev.viindhyagold.com/');
  await page.getByRole('button', { name: 'Log In/Sign Up' }).click();
  await page.getByRole('textbox', { name: 'Enter Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Mobile Number' }).fill('7997547799');
  await page.getByRole('button', { name: 'Get OTP' }).click();
  //await page.getByRole('textbox').first().click();
  //await page.getByRole('textbox').first().fill('4');
  //await page.getByRole('textbox').nth(1).fill('5');
  //await page.getByRole('textbox').nth(2).fill('4');
  //await page.getByRole('textbox').nth(3).fill('5');
  //await page.getByRole('textbox').nth(4).fill('4');
  //await page.getByRole('textbox').nth(5).fill('5');

  const otpInputs = page.locator('input[maxlength="1"]');
  await otpInputs.nth(0).fill('4');
  await otpInputs.nth(1).fill('5');
  await otpInputs.nth(2).fill('4');
  await otpInputs.nth(3).fill('5');
  await otpInputs.nth(4).fill('4');
  await otpInputs.nth(5).fill('5');
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Success', { exact: true }).click();
});
