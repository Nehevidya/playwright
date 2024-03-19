const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('Drag and drop using inbuild command',async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const rome=await page.locator('#box6')
    const Italy=await page.locator('#box106')
    await rome.dragTo(Italy)
    expect(await page.locator('#box6'))
    .toHaveAttribute('style','visibility:visible;background-color:rgb(0,255,0);')
    await page.waitForTimeout(5000)
    
})
test.only('Drag and drop using mouse action',async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box6').hover()
    await page.mouse.down()
    await page.locator('#box106').hover()
    await page.mouse.up()
    expect(await page.locator('#box6'))
    .toHaveAttribute('style','visibility:visible;background-color:rgb(0,255,0);')
    await page.waitForTimeout(5000)

})