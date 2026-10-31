import { test, expect } from '@playwright/test';

test('API Test - GET Request after Login', async ({ page }) => {
  // 1. UI Login Flow
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.goto('https://app-dev.onairad.com/#/otp');
   await page.pause();
   //await page.getByRole('button', { name: 'Verify & Proceed' }).click();
   await page.goto('https://app-dev.onairad.com/#');
   await page.waitForTimeout(5000);
  // 2. Use page.request instead of request to inherit session cookies/tokens automatically
  const response = await page.request.get('https://app-dev.onairad.com/app/accounts/paginated-search/page', {
    headers: {
     // 'Authorization': '',
    }
  });
     expect(response.status()).toBe(200);
});