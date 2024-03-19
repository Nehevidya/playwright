const { test, expect } = require('@playwright/test')
const exp = require('constants')
test('verfy getbyAlttext method in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele = await page.getByAltText('letcode')
    await expect(page.getByAltText('letcode')).toBeVisible()
    await expect(ele).toBeVisible()
})
test('verfy getbyLabel method in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
   let ele2 = await page.getByLabel('main navigation')
   await expect(ele2).toBeVisible()

})
test('verfy getbyplaceholder method in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.getByPlaceholder('First Name').fill('Ajay')
    await page.waitForTimeout(4000)

})
test('verfy getbyRole method in playwright',async({page})=>{
    await page.goto('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await page.getByRole('checkbox',{name:"Option 1"}).check()
    await page.waitForTimeout(4000)

})
test.only('verfy getbyText method in playwright',async({page})=>{
    await page.goto('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
   let ele3=await page.getByText('Dropdown Menu(s), Checkboxe(s) & Radio Button(s)')
   await expect(ele3).toBeVisible()
})