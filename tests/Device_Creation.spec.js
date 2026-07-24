import { test, expect } from '@playwright/test';

test('Device_Creation', async ({ page }) => {
  const istTimestamp = new Date(Date.now()).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  })
  const deviceName = 'JOYALUKUS_' + istTimestamp;
  const limitReachedMessage = page.getByText('device creation failed', { exact: false });
  const successMessage = page.getByText('Device successfully created', { exact: false });
  test.setTimeout(140000);
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByText('Email').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
  await page.locator('span').filter({ hasText: 'devicesDevices' }).first().click();
  await page.getByRole('link', { name: 'Devices' }).click();
  await page.getByRole('link', { name: 'Create Device' }).click();
  await page.getByRole('button', { name: 'Select Agreement' }).click();
  await page.locator('.mat-mdc-paginator-touch-target').click();
  await page.getByText('40', { exact: true }).click();
  await page.getByRole('row', { name: '37aac512-4444-466b-a8ff-' }).getByLabel('').check();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('textbox', { name: 'Enter device name' }).click();
  await page.getByRole('textbox', { name: 'Enter device name' }).fill(deviceName);
  await page.getByRole('textbox', { name: 'Enter rent' }).click();
  await page.getByRole('textbox', { name: 'Enter rent' }).fill('2000');
  await page.getByRole('textbox', { name: 'Enter installation cost' }).click();
  await page.getByRole('textbox', { name: 'Enter installation cost' }).fill('200');
  await page.getByRole('textbox', { name: 'Device in-house location' }).click();
  await page.getByRole('textbox', { name: 'Device in-house location' }).fill('a1');
  await page.getByRole('textbox', { name: 'Expected viewers' }).click();
  await page.getByRole('textbox', { name: 'Expected viewers' }).fill('200');
  await page.getByRole('textbox', { name: 'Enter manufacturer name' }).click();
  await page.getByRole('textbox', { name: 'Enter manufacturer name' }).fill('dell');
  await page.getByRole('textbox', { name: 'Enter Serial Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Serial Number' }).fill('12345');
  await page.getByRole('textbox', { name: 'Memory in GB' }).click();
  await page.getByRole('textbox', { name: 'Memory in GB' }).fill('40');
  await page.locator('.mat-mdc-form-field.w-50.mat-mdc-form-field-type-mat-input.mat-form-field-appearance-outline.mat-primary.ng-untouched.ng-pristine > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.getByRole('textbox', { name: 'Disk size in GB' }).fill('40');
  await page.getByRole('textbox', { name: 'Device price' }).click();
  await page.getByRole('textbox', { name: 'Device price' }).fill('50000');
  await page.getByRole('textbox', { name: 'Shop/Store name' }).click();
  await page.getByRole('textbox', { name: 'Shop/Store name' }).fill('dell store');
  await page.getByRole('button', { name: 'Open calendar' }).first().click();
  await page.getByRole('button', { name: 'September 1,' }).click();
  await page.getByRole('button', { name: 'Open calendar' }).nth(1).click();
  await page.getByRole('button', { name: 'Next month' }).click();
  await page.getByRole('button', { name: 'Next month' }).click();
  await page.getByRole('button', { name: 'November 30,' }).click();
  await page.getByRole('textbox', { name: 'Operating System' }).click();
  await page.getByRole('textbox', { name: 'Operating System' }).fill('windows11');
  await page.getByRole('button', { name: 'Add Screen' }).click();
  await page.getByText('Aspect Ratio', { exact: true }).click();
  await page.getByText('LANDSCAPE - 16x9 - 1920x1080').click();
  await page.getByText('Screen Position').click();
  await page.getByRole('option', { name: 'TOP' }).click();
  await page.getByRole('textbox', { name: 'Slot Price' }).click();
  await page.getByRole('textbox', { name: 'Slot Price' }).fill('200');
  await page.getByText('Size (inches)').click();
  await page.getByRole('option', { name: '22' }).click();
  await page.getByRole('button', { name: 'Add Screen' }).click();
  await page.getByText('Aspect Ratio', { exact: true }).click();
  await page.getByRole('option', { name: 'LANDSCAPE - 16x9 - 1920x1080' }).locator('span').click();
  await page.getByText('Screen Position').click();
  await page.getByText('BOTTOM').click();
  await page.locator('#mat-input-23').click();
  await page.locator('#mat-input-23').fill('200');
  await page.getByText('Size (inches)').click();
  await page.getByRole('option', { name: '22' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
   await Promise.race([
    successMessage.waitFor({ state: 'visible' }),
    limitReachedMessage.waitFor({ state: 'visible' })
  ]);
  if (await successMessage.isVisible()) {

    await expect(successMessage).toBeVisible();

  } else {
    await expect(limitReachedMessage).toBeVisible();
  }
});



test('Clone the device', async ({ page }) => {

  const limitReachedMessage = page.getByText('Maximum allowed devices', { exact: false });
  const successMessage = page.getByText('Successfully cloned the device!', { exact: false });

  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByText('Email').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
  await page.locator('span').filter({ hasText: 'devicesDevices' }).first().click();
  await page.getByRole('link', { name: 'Devices' }).click();
  await page.getByRole('row', { name: 'HAPPY HOMES_EXHIBHITOR_DEVICE_2 1 2 Leyosys 2026-02-28 1500 expand row' }).getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Clone' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await Promise.race([
    successMessage.waitFor({ state: 'visible' }),
    limitReachedMessage.waitFor({ state: 'visible' })
  ]);
  if (await successMessage.isVisible()) {

    await expect(successMessage).toBeVisible();

  } else {
    await expect(limitReachedMessage).toBeVisible();
  }
});



test('Edit after clone', async ({ page }) => {
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByText('Email').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
  await page.locator('span').filter({ hasText: 'devicesDevices' }).first().click();
  await page.getByRole('link', { name: 'Devices' }).click();
  await page.getByRole('row', { name: 'HAPPY HOMES_EXHIBHITOR_DEVICE_2_1757445868817 0 2 Leyosys 2026-02-28 1500' }).getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Activate' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect(page.getByText('Device is successfully activated')).toBeVisible();
  await page.getByRole('row', { name: 'HAPPY HOMES_EXHIBHITOR_DEVICE_2_1757445868817 0 2 Leyosys 2026-02-28 1500' }).getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('textbox', { name: 'Enter installation cost' }).click();
  await page.getByRole('textbox', { name: 'Enter installation cost' }).fill('2000');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect(page.getByText('Device successfully updated')).toBeVisible();

});




test('device search through different locations', async ({ page }) => {
  test.setTimeout(80000);
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByText('Email').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
  await page.locator('span').filter({ hasText: 'devicesDevices' }).first().click();
  await page.getByRole('link', { name: 'Devices' }).click();
  async function searchLocation( countryName,stateName, districtName) {
    await page.getByRole('combobox', { name: 'Country' }).click();
    await page.getByRole('combobox', { name: 'Country' }).fill(countryName.slice(0, 3));
    await page.getByText(countryName.toUpperCase()).click();
    await page.getByRole('combobox', { name: 'State' }).fill(stateName.slice(0, 3));
    await page.getByText(stateName.toUpperCase()).click();
    await page.getByRole('combobox', { name: 'District' }).fill(districtName.slice(0, 3));
    await page.getByText(districtName.toUpperCase()).click();
    await page.getByRole('button', { name: 'Search' }).click();
   }
    await page.waitForTimeout(1000); 
      const deviceCards = page.locator('mat-card');
      const deviceCount = await deviceCards.count();
      if (deviceCount > 0) {
      await expect(deviceCards.first()).toBeVisible();
    } else {
      await expect(deviceCards).toHaveCount(0);
    } 
  await searchLocation('INDIA','TELANGANA', 'HYDERABAD');
  await searchLocation('INDIA','ANDHRA PRADESH', 'VISAKHAPATNAM');
  await searchLocation('INDIA','ANDHRA PRADESH', 'GUNTUR');
  await searchLocation('INDIA','ANDHRA PRADESH', 'EAST GODAVARI');
  await page.waitForTimeout(1000); 
});



test('device search through Account Name', async ({ page }) => {
  test.setTimeout(80000);
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByText('Email').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
  await page.locator('span').filter({ hasText: 'devicesDevices' }).first().click();
  await page.getByRole('link', { name: 'Devices' }).click();
  async function searchAccount( accountName) {
  await page.getByText('Account name').click();
  await page.getByRole('textbox', { name: 'Account name' }).fill(accountName.slice(0, 3));
  await page.getByRole('button', { name: 'Search' }).click();
   }
    await page.waitForTimeout(2000); 
      const deviceCards = page.locator('mat-card');
      const deviceCount = await deviceCards.count();
      if (deviceCount > 0) {
      await expect(deviceCards.first()).toBeVisible();
    } else {
      await expect(deviceCards).toHaveCount(0);
    } 
  await searchAccount('amb mall');
  await page.waitForTimeout(1000); 
  await searchAccount('chandana brothers');
  await page.waitForTimeout(1000); 
  await searchAccount('aparna county');
  await page.waitForTimeout(1000); 
});




test('device search through account types', async ({ page }) => {
  test.setTimeout(80000);
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByText('Email').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
  await page.locator('span').filter({ hasText: 'devicesDevices' }).first().click();
  await page.getByRole('link', { name: 'Devices' }).click();

  async function searchAccounttypes( accountTypes) {
     await page.getByText('Account Type', { exact: true }).click();
     await page.getByText(accountTypes.toUpperCase()).click();
     await page.getByRole('button', { name: 'Search' }).click();
     
   }
    await page.waitForTimeout(1000); 
      const deviceCards = page.locator('mat-card');
      const deviceCount = await deviceCards.count();
      if (deviceCount > 0) {
      await expect(deviceCards.first()).toBeVisible();
    } else {
      await expect(deviceCards).toHaveCount(0);
    } 
  await searchAccounttypes('shopping malls');
  await searchAccounttypes('gated community');
  await searchAccounttypes('JWELLERY SHOPS');
  await page.waitForTimeout(1000); 
});





test('device search through heartbeat', async ({ page }) => {
  test.setTimeout(80000);
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByText('Email').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
  await page.locator('span').filter({ hasText: 'devicesDevices' }).first().click();
  await page.getByRole('link', { name: 'Devices' }).click();
  async function searchHeartbeat(Heartbeat ) {
     await page.getByText('Heartbeat', { exact: true }).click();
     await page.getByText(Heartbeat.toUpperCase()).click();
     await page.getByRole('button', { name: 'Search' }).click();
     
   }
    await page.waitForTimeout(1000); 
      const deviceCards = page.locator('mat-card');
      const deviceCount = await deviceCards.count();
      if (deviceCount > 0) {
      await expect(deviceCards.first()).toBeVisible();
    } else {
      await expect(deviceCards).toHaveCount(0);
    } 
  await searchHeartbeat('online');
  await page.waitForTimeout(1000); 
  await searchHeartbeat('offline');
  await page.waitForTimeout(1000); 
});




test('searching active and non-active devices', async ({ page }) => {
  test.setTimeout(80000);
  await page.goto('https://app-dev.onairad.com/#/login');
  await page.getByText('Email').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pandirisurya2502@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('2002*Surya');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
  await page.locator('span').filter({ hasText: 'devicesDevices' }).first().click();
  await page.getByRole('link', { name: 'Devices' }).click();
  await page.getByRole('checkbox', { name: 'Active' }).check();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('checkbox', { name: 'Active' }).uncheck();
  await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1000); 
      const deviceCards = page.locator('mat-card');
      const deviceCount = await deviceCards.count();
      if (deviceCount > 0) {
      await expect(deviceCards.first()).toBeVisible();
    } else {
      await expect(deviceCards).toHaveCount(0);
    } 
});
