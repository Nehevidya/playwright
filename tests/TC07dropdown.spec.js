const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('verify static dropdown in playwright',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption('2')
    await expect(page.locator('p[class="subtitle"]')).toBeVisible()
    await expect(page.locator('p[class="subtitle"]')).toHaveText('You have selected Orange')
    await page.locator('#superheros').selectOption('bt')
    await expect(page.locator('[class="subtitle"]').last()).toBeVisible()
    await expect(page.locator('[class="subtitle"]').last()).toHaveText('You have selected Batman')
    //await page.locator('#lang').selectOption('java')
    //await expect(page.locator('[class="select"]')).toBeVisible()
    await page.locator('#country').selectOption('India')
    await expect(page.locator('#country')).toHaveValue('India')



    await page.waitForTimeout(4000)
})

test('verify  redbus dynyamic dropdown in playwright',async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('pune',{delay:2000})
    await page.waitForSelector('.placeHolderMainText')
    let optioncount=await page.locator('.placeHolderMainText').count()
    for(let i=2;i<optioncount;i++){
        let text=await page.locator('.placeHolderMainText').nth(2).textContent()
        console.log(text)
        if(text === 'Viman Nagar'){
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }

    }
     await page.waitForTimeout(5000)
})


test.only('verify dynyamic dropdown ',async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('#dest').fill('Mumbai',{delay:2000})
    await page.waitForSelector('.placeHolderMainText')
    let result=await page.locator('.placeHolderMainText').count()
    console.log(result)
    for(i=0;i<result;i++){
        let text=await page.locator('.placeHolderMainText').nth(i).textContent()
        console.log(text)
        if(text === 'Andheri East'){
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(5000)
    let aseert=await page.locator('text[class="placeHolderMainText"]')
    await expect(aseert).toHaveText('Andheri East')
})