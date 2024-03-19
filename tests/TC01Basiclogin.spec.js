const {test,expect} = require('@playwright/test')
const exp = require('constants')

test('Verify the login functionality with valid credentials',async({page})=>{
    //AAA
    //Arrang
    //Action 
    //Assertion
    //Step 1 Navigate to the URl
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('Admin') 
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('button[type="submit"]').click()
    await page.waitForTimeout(4000)
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toBeVisible()
    await expect(page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toHaveText('Dashboard')
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})
test('verify the login functionality with invalid credentials',async({page})=>{
      // step1 Navigate to the URL
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     
    })