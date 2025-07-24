const {test,expect}=require('@playwright/test')
test ("My first test",async function({page}) {
    expect(12).toBe(12)
    
})



test.skip ("My second test",async function({page}) {

expect(100).toBe(101)
})


test ("My third test",async function({page}) {

expect(2.0).toBe(2.0)
})


test ("My fourth test ",async function({page}) {

expect("Areeb zakir ").toContain("Areeb")
expect(true).toBeTruthy()
})

test ("My fifth  test ",async function({page}) {

expect("Areeb zakir".includes("zakir")).toBeFalsy()
expect(false).toBeFalsy()
})