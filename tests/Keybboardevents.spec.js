const { test, expect } = require('@playwright/test');

test("verify application title", async ({ page }) => {
  await page.goto("https://www.google.com");

  // Wait for the search box, regardless of input or textarea
  const searchBox = page.locator('[name="q"]');
  await searchBox.waitFor({ state: 'visible', timeout: 15000 });

  await searchBox.focus();
  await page.keyboard.type("Playwright testing", { delay: 100 });
  await page.keyboard.press("ArrowLeft");

  await page.keyboard.down("Shift");
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press("ArrowLeft");
  }
  await page.keyboard.up("Shift");

  await page.keyboard.press("Backspace");
});
