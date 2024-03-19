const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('handle js simple alter with playwright',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog',async simpleAlert =>{
        await expect(simpleAlert.message()).toContain('I am a JS Alert')
        await expect(simpleAlert.type()).toContain('alert')
        await simpleAlert.accept()
    })
    await page.locator('button[onclick="jsAlert()"]').click()
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
    await page.waitForTimeout(4000)
})
