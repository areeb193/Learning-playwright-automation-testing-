const { test, expect } = require('@playwright/test');

test("Select Values From Dropdown", async function({ page }) {
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    // Selecting options for testing
    await page.locator("#state").selectOption({ label: "Goa" });
    await page.locator("#state").selectOption({ value: "Himachal Pradesh" });

    // ✅ Declare ddstate at the top level of the test
    let ddstate = false;

    // Get all <option> elements
    let allElements = await page.$$("option");

    for (let i = 0; i < allElements.length; i++) {
        let element = allElements[i];
        let text = await element.textContent();

        console.log("value from dropdown " + text);

        if (text.trim() === "Punjab") {
            ddstate = true;
            break;
        }
    }

    // ✅ Assertion after the loop
    await expect(ddstate).toBeTruthy();
    await page.locator("#hobbies").selectOption(['Playing','Swimming']);
});
