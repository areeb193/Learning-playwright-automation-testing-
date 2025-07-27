const {test,expect}=require('@playwright/test')



test ("Verify Error Message ", async function({page}) {
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


 await page.getByPlaceholder("Username").type("Admin",{delay: 100})

 await page.getByPlaceholder("Password").type("admisadjnrfnjrvnjnv",{delay: 100})

    await page.locator("//button[@type='submit']").click()

   const errorMessage= await  page.locator("//p[contains(@class,'alert-content-text')]").textContent()
   console.log("Error Message:", errorMessage);

   expect(errorMessage.includes("Invalid credentials")).toBeTruthy();
})