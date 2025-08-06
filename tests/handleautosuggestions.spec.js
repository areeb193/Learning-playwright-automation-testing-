const {test,expect}=require('@playwright/test')
test ("verify Application title using loop ",async function({page}) {
   
   await page.goto("https://www.google.com")

   // Handle Google's consent popup if it appears
   const acceptButton = page.locator('button:has-text("I agree")');
   if (await acceptButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await acceptButton.click();
   }

   await page.locator('textarea[name="q"]').fill("Playwright")

   await page.waitForSelector("//li[@role='presentation']")

   const elements = await page.$$("//li[@role='presentation']")

   for ( let i=0;i<elements.length;i++){
    const text =await elements[i].textContent()
     if(text.includes("documentation")){
        console.log("Text found: " + text)
        await elements[i].click()
        break
     }
   }
})
