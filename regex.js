let regexForPhoneNumber = /^[/d]{11}/
console.log(regexForPhoneNumber.test("07041900800"))
const test = ()=>{
    console.log(regexForPhoneNumber.test(userInput.value))
}