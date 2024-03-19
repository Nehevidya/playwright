const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('Verify login functionality with valid credentils', async ({ page }) => {
    //AAA
    //Arrange
    //Action
    //Assetion
    //Step 1 navigate to URL
    await page.goto('https://www.saucedemo.com/')
    //Step 2 Enter Username
    //<input id = "One" class= "TextBox">
    //common formula = tagName[attr = value]
    //input[id = "one"]
    await page.locator('input[id="user-name"]').fill('standard_user')
    //Step 3 Enter Password
    await page.locator('input[id="password"]').fill('secret_sauce')
    //Step 4 click on login button
    await page.locator('input[id="login-button"]').click()
    await page.waitForTimeout(4000)
    //Step 5 assertions/Validation
    await expect(page.locator('div[id="shopping_cart_container"]')).toBeVisible()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page.locator('span[class="title"]')).toHaveText('Products')
    await expect(page.locator('div[class="app_logo"]')).toHaveText('Swag Labs')
})
test.only('Verify login functionality with invalid credentils', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('[name="user-name"]').fill('standard_userr')
    await page.locator('[name="password"]').fill('secret_sauce2')
    await page.locator('button[type="submit"]').click()
    await expect(page.locator('.error-button')).toBeVisible()
    await expect(page.locator('.error-button')).toHaveText('Epic sadface: Username and password do not match any user in this service')
})

