const {test,expect}=require('@playwright/test')
test.use({viewport: { width: 1500, height: 720 }});
test ("Valid Login", async function({page}) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    await page.getByPlaceholder("Username").type("Admin",{delay: 100})
    await page.locator("input[placeholder='Password']").type("admin1234",{delay: 100})
    await page.locator("//button[@type='submit']").click()
    await page.waitForTimeout(5000); // Wait for 2 seconds to ensure the page loads
    // Verify that the URL contains 'dashboard' after login
    await expect(page).toHaveURL(/dashboard/);
    await page.getByAltText("profile picture").first().click();

    await page.getByText("Logout").click();
   // await page.waitForTimeout(5000);
    await expect(page).toHaveURL(/login/);
})