// function searchStudent() {
 
//     // console.log(stu);
//     // disp.innerHTML = "The student at index "+searchInp.value+" is "+stu[searchInp.value].firstName
//     // matric.innerHTML= " Matric number is: " + randomNumber +" Date: "+ newDate 


// }

var stu =JSON.parse(localStorage.getItem("studentDetails"));

let studentDetails = stu.map((students, index) =>{
    myTable.innerHTML += 
    `<tr>
    <td>${index+1}</td>
    <td>${students.firstName}</td>
    <td>${students.lastName}</td>
    <td>${students.email}</td>
    <td>
    <button class="btn btn-warning" onclick="edit(${index})">Edit</button>
    <button class="btn btn-danger ms-2" onclick="del(${index})">Del</button>
    </td>
    </tr>`
})

// for (let index = 0; index < stu.length; index++) {
//     myTable.innerHTML += 
//     `<tr>
//     <td>${index+1}</td>
//     <td>${stu[index].firstName}</td>
//     <td>${stu[index].lastName}</td>
//     <td>${stu[index].email}</td>
//     <td>
//     <button class="btn btn-warning" onclick="edit(${index})">Edit</button>
//     <button class="btn btn-danger ms-2" onclick="del(${index})">Del</button>
//     </td>
//     </tr>`
// }

function del(i) {
    stu=stu.filter((__ind,ind)=>ind!=i)
    localStorage.setItem("studentDetails",JSON.stringify(stu))
    location.reload()
}
function edit(i) {
    localStorage.setItem("index",JSON.stringify(i)) 
    window.location.href="edit.html"
}