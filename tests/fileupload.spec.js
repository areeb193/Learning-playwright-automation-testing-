const {test, expect} = require ('@playwright/test')

test("",async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload")
await page.locator("#file-upload").setInputFiles("./uploads/t.txt")
    await page.locator("#file-submit").click()
    await expect(page.locator("//h3")).toHaveText("File Uploaded!")
    await expect(page.locator("#uploaded-files")).toHaveText("t.txt")

})