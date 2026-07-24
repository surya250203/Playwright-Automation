import { test, expect } from '@playwright/test';

test('Account creation with positive case', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://app-dev.onairad.com/#/otp');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
  await page.goto('https://app-dev.onairad.com/#/notfound');
  await page.waitForTimeout(3000);
  await page.locator('span').filter({ hasText: 'peopleAccounts' }).first().click();
  await page.getByRole('link', { name: 'Accounts' }).click();
  await page.getByRole('link', { name: 'Create' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Enter account name' }).fill('Inorbit mall');
  await page.locator('#mat-select-value-1').click();
  await page.getByText('GATED_COMMUNITY').click();
  await page.getByRole('textbox', { name: 'Foot fall' }).click();
  await page.getByRole('textbox', { name: 'Foot fall' }).fill('30');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Enter main phone number' }).click();
  await page.getByRole('textbox', { name: 'Enter main phone number' }).fill('9502151677');
  await page.getByRole('textbox', { name: 'Enter alternate phone number' }).click();
  await page.getByRole('textbox', { name: 'Enter alternate phone number' }).fill('9502151665');
  await page.getByRole('textbox', { name: 'Enter email address' }).click();
  await page.getByRole('textbox', { name: 'Enter email address' }).fill('pandirisurya@gmail.com');
  await page.locator('#mat-select-value-2').click();
  await page.getByRole('option', { name: 'INDIA' }).click();
  await page.locator('#mat-select-value-3').click();
  await page.getByText('TELANGANA').click();
  await page.locator('#mat-select-value-4').click();
  await page.getByText('RANGAREDDY', { exact: true }).click();
  await page.locator('#mat-select-value-5').click();
  await page.getByText('Bachupally-').click();
  await page.getByRole('textbox', { name: 'Enter full address' }).click();
  await page.getByRole('textbox', { name: 'Enter full address' }).fill('bachupally , hyderabad');
  await page.getByRole('textbox', { name: 'Enter PAN/TAX number' }).click();
  await page.getByRole('textbox', { name: 'Enter PAN/TAX number' }).fill('AAAPA1234A');
  await page.getByRole('button', { name: 'Add Bank Account' }).click();
  await page.getByRole('textbox', { name: 'Bank name' }).click();
  await page.getByRole('textbox', { name: 'Bank name' }).fill('hdfc');
  await page.getByRole('textbox', { name: 'Swift/BIC/IFSC' }).click();
  await page.getByRole('textbox', { name: 'Swift/BIC/IFSC' }).fill('1234');
  await page.getByRole('textbox', { name: 'Account/IBAN' }).click();
  await page.getByRole('textbox', { name: 'Account/IBAN' }).fill('123456');
  await page.getByRole('textbox', { name: 'Beneficiary name' }).click();
  await page.getByRole('textbox', { name: 'Beneficiary name' }).fill('suryalakshmi');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(3000);
});




test('Create Exhibitor Agreements ', async ({ page }) => {
  test.setTimeout(140000);
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByText('Email').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
  await page.locator('span').filter({ hasText: 'peopleAccounts' }).first().click();
  await page.getByRole('link', { name: 'Accounts' }).click();
  await page.waitForTimeout(1000); 
  await page.getByRole('row', { name: 'SURY SHOPPING MALLS ₹388.43 5' }).getByRole('button').nth(1).click();
  await page.getByRole('menuitem', { name: 'Exhibitor Agreements' }).click();
  await page.waitForTimeout(1000); 
  await page.getByRole('button', { name: 'Add Agreement' }).click();
  await page.getByText('Allowed Devices').click();
  await page.getByRole('textbox', { name: 'Allowed Devices' }).fill('4');
  await page.getByText('Allowed Content').click();
  await page.getByRole('textbox', { name: 'Allowed Content' }).fill('3');
  await page.getByText('Agreement status', { exact: true }).click();
  await page.getByRole('option', { name: 'OPEN' }).click();
  await page.getByRole('button', { name: 'Open calendar' }).click();
  await page.getByRole('button', { name: 'September 1,' }).click();
  await page.getByRole('button', { name: 'Next month' }).click();
  await page.getByRole('button', { name: 'October 31,' }).click();
  await page.locator('#mat-mdc-form-field-label-10').getByText('Report Frequency').click();
  await page.getByText('MONTHLY').click();
   await page.getByText('Company Info').click();
  await page.getByText('TELANGANA-').click();
  await page.waitForTimeout(1000); 
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000); 
  await expect(page.getByText('Exhibitor agreements are successfully updated')).toBeVisible();
});




test('Create Multiple Exhibitor Agreements ', async ({ page }) => {
  test.setTimeout(190000);
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByText('Email').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
  await page.locator('span').filter({ hasText: 'peopleAccounts' }).first().click();
  await page.getByRole('link', { name: 'Accounts' }).click();
  await page.waitForTimeout(1000); 
   await page.getByRole('row', { name: 'SURY SHOPPING MALLS ₹388.43 5' }).getByRole('button').nth(1).click();
  await page.getByRole('menuitem', { name: 'Exhibitor Agreements' }).click();

  async function createExhibitor( index, allowedDevices,allowedContent,startDate, endDate, reportFrequency) {

  //await page.getByRole('row', { name: 'SURY SHOPPING MALLS ₹388.43 5' }).getByRole('button').nth(1).click();
  //await page.getByRole('menuitem', { name: 'Exhibitor Agreements' }).click();
  //await page.waitForTimeout(1000); 
  await page.getByRole('button', { name: 'Add Agreement' }).click();
  await page.locator('input[formcontrolname="allowedDevices"]').nth(index).fill(allowedDevices);
  await page.locator('form input[formcontrolname="allowedContent"]').nth(index).fill(allowedContent);
  await page.getByText('Agreement status', { exact: true }).nth(index).click();
  await page.getByRole('option', { name: 'OPEN' }).first().click();
  await page.getByRole('button', { name: 'Open calendar' }).nth(index).click();
  await page.getByRole('button', { name: startDate }).first().click();
  await page.getByRole('button', { name: 'Next month' }).first().click();
  await page.getByRole('button', { name: endDate }).first().click();
  await page.getByText('Report Frequency').nth(index).click();
  await page.locator('span.mdc-list-item__primary-text').filter({ hasText: reportFrequency }).nth(index).click();
  await page.getByText('Company Info').nth(index).click();
  await page.getByText('TELANGANA-').nth(index).click();
  await page.waitForTimeout(1000); 
  //await page.getByRole('button', { name: 'Save' }).click();
  //await page.getByRole('button', { name: 'Confirm' }).click();
  //await page.waitForTimeout(1000); 
  //await expect(page.getByText('Exhibitor agreements are successfully updated')).toBeVisible();
  }
  
  await createExhibitor("0",'4','3','september 1,','october 31,', 'monthly');
  await page.waitForTimeout(1000); 
  await createExhibitor("1",'5','4','september 16,','october 16,', 'OFF');
  await page.waitForTimeout(1000); 

});




test('Create License Agreements ', async ({ page }) => {
  test.setTimeout(140000);
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByText('Email').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
  await page.locator('span').filter({ hasText: 'peopleAccounts' }).first().click();
  await page.getByRole('link', { name: 'Accounts' }).click();
  await page.waitForTimeout(1000); 
  await page.getByRole('button', { name: 'Next page' }).click();
  await page.getByRole('row', { name: 'SURY SHOPPING MALLS ₹388.43 5' }).getByRole('button').nth(1).click();
  await page.getByRole('menuitem', { name: 'License Agreements' }).click();
  await page.waitForTimeout(1000); 
  await page.getByRole('button', { name: 'Add Agreement' }).click();
  await page.getByText('Monthly device fee').click();
  await page.getByRole('textbox', { name: 'Monthly device fee' }).fill('450');
  await page.getByText('Allowed Devices').click();
  await page.getByRole('textbox', { name: 'Allowed Devices' }).fill('4');
  await page.getByText('Allowed Content').click();
  await page.getByRole('textbox', { name: 'Allowed Content' }).fill('3');
  await page.getByText('Agreement status', { exact: true }).click();
  await page.getByRole('option', { name: 'OPEN' }).click();
  await page.getByRole('button', { name: 'Open calendar' }).click();
  await page.getByRole('button', { name: 'September 1,' }).click();
  await page.getByRole('button', { name: 'Next month' }).click();
  await page.getByRole('button', { name: 'October 31,' }).click();
  await page.locator('#mat-mdc-form-field-label-12').getByText('Report Frequency').click();
  await page.getByRole('option', { name: 'MONTHLY' }).click();
  await page.getByText('Company Info').click();
  await page.getByText('TELANGANA-').click();
 // await page.waitForTimeout(1000); 
  //await page.getByRole('button', { name: 'Save' }).click();
 // await page.getByRole('button', { name: 'Confirm' }).click();
 // await page.waitForTimeout(1000); 
  //await expect(page.getByText('Exhibitor agreements are successfully updated')).toBeVisible();
});





test('Create Multiple Licensed Agreements ', async ({ page }) => {
  test.setTimeout(190000);
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByText('Email').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
  await page.locator('span').filter({ hasText: 'peopleAccounts' }).first().click();
  await page.getByRole('link', { name: 'Accounts' }).click();
  await page.waitForTimeout(1000); 
  await page.getByRole('button', { name: 'Next page' }).click();
  await page.getByRole('row', { name: 'SURY SHOPPING MALLS ₹388.43 5' }).getByRole('button').nth(1).click();
  await page.getByRole('menuitem', { name: 'License Agreements' }).click();

  async function createLicensed( index,deviceFees, allowedDevices,allowedContent,startDate, endDate, reportFrequency) {

  //await page.getByRole('row', { name: 'SURY SHOPPING MALLS ₹388.43 5' }).getByRole('button').nth(1).click();
  //await page.getByRole('menuitem', { name: 'License Agreements' }).click();
  //await page.waitForTimeout(1000); 
  await page.getByRole('button', { name: 'Add Agreement' }).click();
  await page.getByRole('textbox', { name: 'Monthly device fee' }).nth(index).fill(deviceFees);
  await page.locator('input[formcontrolname="allowedDevices"]').nth(index).fill(allowedDevices);
  await page.locator('form input[formcontrolname="allowedContent"]').nth(index).fill(allowedContent);
  await page.getByText('Agreement status', { exact: true }).nth(index).click();
  await page.getByRole('option', { name: 'OPEN' }).first().click();
  await page.getByRole('button', { name: 'Open calendar' }).nth(index).click();
  await page.getByRole('button', { name: startDate }).first().click();
  await page.getByRole('button', { name: 'Next month' }).first().click();
  await page.getByRole('button', { name: endDate }).first().click();
  await page.locator('mat-sidenav-content').click(); // Focus the element
  await page.keyboard.press('PageDown');
  await page.getByText('Report Frequency').nth(index).click();
  await page.waitForTimeout(500);
  await page.getByRole('listitem').filter({ hasText: reportFrequency }).nth(index).click();
  await page.getByText('Company Info').nth(index).click();
  await page.getByText('TELANGANA-').nth(index).click();
  await page.waitForTimeout(1000); 
  //await page.getByRole('button', { name: 'Save' }).click();
  //await page.getByRole('button', { name: 'Confirm' }).click();
  //await page.waitForTimeout(1000); 
  //await expect(page.getByText('Exhibitor agreements are successfully updated')).toBeVisible();
  }
  
  await createLicensed('0',"400",'4','3','september 1,','october 31,', 'monthly');
  await page.waitForTimeout(1000); 
  await createLicensed('1',"450",'5','4','september 16,','october 16,', 'YEARLY');
  await page.waitForTimeout(1000); 
  await createLicensed('2',"500",'6','5','september 10,','october 10,', 'OFF');
  await page.waitForTimeout(1000); 

});





test('Amount withdraw with balance validation in wallet', async ({ page }) => {
  test.setTimeout(140000);
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByText('Email').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
  await page.locator('span').filter({ hasText: 'peopleAccounts' }).first().click();
  await page.getByRole('link', { name: 'Accounts' }).click();
  await page.getByText('Account Name').click();
  await page.getByRole('textbox', { name: 'Account Name' }).fill('surya electronics');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000); 
  await page.getByRole('button').filter({ hasText: 'more_vert' }).click();
  await page.getByRole('menuitem', { name: 'Wallet' }).click();
  await page.waitForTimeout(1000); 
  await page.getByRole('button', { name: 'Withdraw' }).click();

  const balanceText = await page.getByText('Available balance').textContent();
  const currentBalance = parseFloat(balanceText.replace(/[^\d.]/g, ''));
  const withdrawAmount = 100;
   await page.locator('input[type="number"]').fill(withdrawAmount.toString());

  if (currentBalance >= withdrawAmount) {
    await page.getByRole('button', { name: 'Withdraw' }).nth(1).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect(page.getByText('Wallet withdrawal has been successfully completed.')).toBeVisible();

    async function handleTransaction(action) 
    {

          if (action === 'execute') {
            await page.getByText('Transaction status types').click();
            await page.getByRole('option', { name: 'PENDING' }).click();
            await page.getByRole('button', { name: 'Search' }).click();
            await page.getByRole('row', { name: 'WALLET_WITHDRAWAL PENDING',  exact: false  }).getByRole('button').first().click();
            await page.getByRole('menuitem', { name: 'Execute' }).click();
            await page.getByRole('textbox', { name: 'Transaction Reference' }).click();
            await page.getByRole('textbox', { name: 'Transaction Reference' }).fill('1234abcd');
            //await page.getByRole('button', { name: 'Confirm' }).click();
            await expect(page.getByText('Wallet withdrawal has been successfully completed.')).toBeVisible();

          } else  {
             await page.getByText('Transaction status types').click();
             await page.getByRole('option', { name: 'PENDING' }).click();
             await page.getByRole('button', { name: 'Search' }).click();
             await page.getByRole('row', { name: 'WALLET_WITHDRAWAL PENDING',  exact: false  }).getByRole('button').first().click();
             await page.getByRole('menuitem', { name: 'Cancel' }).click();
             await page.getByRole('button', { name: 'Confirm' }).click();
             await expect(page.getByText('Withdrawal cancellation is successfully processed!')).toBeVisible();
             await page.waitForTimeout(1000); 
    
          }
    
    }
     await handleTransaction('execute');
    // await handleTransaction('cancel');
     }
  
  
  
  else {
     await expect(page.getByText('Insufficient balance', { exact: false })).toBeVisible();
     await page.waitForTimeout(1000); 
  }
 
});



test('Wallet search', async ({ page }) => {
  test.setTimeout(140000);
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByText('Email').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
  await page.locator('span').filter({ hasText: 'peopleAccounts' }).first().click();
  await page.getByRole('link', { name: 'Accounts' }).click();
  await page.getByText('Account Name').click();
  await page.getByRole('textbox', { name: 'Account Name' }).fill('surya electronics');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000); 
  await page.getByRole('button').filter({ hasText: 'more_vert' }).click();
  await page.getByRole('menuitem', { name: 'Wallet' }).click();
  await page.waitForTimeout(1000); 

});









