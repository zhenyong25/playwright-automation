const {test} = require('@playwright/test')

test.only('First Playwright test', async ({browser, page}) => {
    // chrome - plugins/cookies 
    // const context = await browser.newContext(); 
    // const page = await context.newPage(); 
    await page.goto("https://google.com"); // add an url 
})