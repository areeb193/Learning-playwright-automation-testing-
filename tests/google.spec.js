const {test,expect}=require('@playwright/test')
test ("verify  application title ",async function({page}) {
    
   await page.goto("https://www.google.com")
   const url=await page.url()
   console.log("title"+ url)

   const title=await page.title()
   console.log("title of the page is "+ title)
  await  expect(page ).toHaveTitle("Google")
})
