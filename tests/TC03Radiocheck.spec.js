const { test, expect } = require('@playwright/test')
const exp = require('constants')

test.only('Handling radio buttons in playwright',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('input[id="vfb-7-1"]')).not.toBeChecked()
    await page.locator('input[id="vfb-7-1"]').check()
    await expect(page.locator('input[id="vfb-7-1"]')).toBeChecked()
    await page.waitForTimeout(5000)
    await page.locator('input[id="vfb-7-2"]').check()
    await expect(page.locator('input[id="vfb-7-1"]')).not.toBeChecked()
})
test('Handling checkboxes in playwright',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('input[id="vfb-6-0"]')).not.toBeChecked()
    await page.locator('input[id="vfb-6-0"]').check()
    await page.waitForTimeout(4000)
    await expect(page.locator('input[id="vfb-6-0"]')).toBeChecked()
    
    

})
test('Handling checkboxes using click metod',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    await page.locator('input[id="vfb-6-0"]').click()
    await page.waitForTimeout(4000)
    await expect(page.locator('input[id="vfb-6-0"]')).toBeChecked()
   // await page.locator('')
    
    
})

 