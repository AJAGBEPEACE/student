// var chicken = {eyes:2,legs:2,name:"Peter"}
// console.log(chicken.legs)
var person = {height:"6ft",complexion:"chocolate",firstName:"Oluwaseyi",lastName:"Doe",middleName:"Raymond",noOfDimples:1,age:709, jump:function(){
    // console.log("I am jumping in the Lord")
}}
// console.log("My name is "+ person.firstName + " " + person.lastName)
person.jump()

// let firstName = papilo
// let lastName = dolly
// let email = papilodolly
// let password = fish
var newStudent = [];
var randomNumber = Math.round(Math.random()*100000)
var date = new Date()
var newDate = date.toLocaleDateString()
// console.log(randomNumber)
if (localStorage.studentDetails) {
    var newStudent=JSON.parse(localStorage.getItem("studentDetails"))
}
function addStudent(){
    var addStudent = {
        firstName:firstName.value,
        lastName:lastName.value,
        email:email.value,
        password:password.value
       
    }
    if (firstName.value =="" || lastName.value=="" || email.value=="" || password.value=="") {
        message.innerHTML = "Input details please"
    } else {
     
        newStudent.push(addStudent)
        localStorage.setItem("studentDetails",JSON.stringify(newStudent))
        console.log(newStudent)
        message.innerHTML = "Student Added"
        firstName.value=""
        lastName.value=""
        email.value=""
        password.value=""
        window.location.href = "signin.html"
    }
    
}





