let form =document.querySelector("#from")
let studentName=document.querySelector("#std_name")
let studentId=document.querySelector("#std_id")
let studentEmail=document.querySelector("#std_email")
let studentCourses=document.querySelector("#std_courses")


form.addEventListener("submit",async e=>{
    e.preventDefault();
    let std_name = e.target[0].value;
    let std_id = e.target[1].value;
    let std_email = e.target[2].value;
    let std_courses= e.target[3].value;  


let payload={
    name:std_name,
    std_id:std_id,
    email:std_email,
    courses:std_courses,
}
let url ="http://localhost:4000/api/students";
let body = await window.fetch(url,{
method:"POST",
headers:{
    "Content-Type":"application/json",

},
body:JSON.stringify(payload),
});
console.log(body);

});








// form.addEventListener("allstudents",async e=>{
//     e.preventDefault();
//     let std_name = e.target[0].value;
//     let std_id = e.target[1].value;
//     let std_email = e.target[2].value;
//     let std_courses= e.target[3].value;  


// let payload={
//     name:std_name,
//     std_id:std_id,
//     email:std_email,
//     courses:std_courses,
// }
// let url ="http://localhost:4000/api/students";
// let body = await window.fetch(url,{
// method:"PUT",
// headers:{
//     "Content-Type":"application/json",

// },
// body:JSON.stringify(payload),
// });
// console.log(body);

// });

let list = document.querySelector("#list");
let allStudents = document.querySelector("#all");

allStudents.addEventListener("submit", async e => {
  e.preventDefault();
  // let payload = await find({});
  let url = "http://localhost:4000/api/students";
  let stdres = await fetch(url);
  let stdcontent = await stdres.json();
  stdcontent.payload.map(e => {
    console.log(e);
    list.innerHTML += `<h1>${e.email}</h1>`;
    list.innerHTML += `<h2>${e.name}</h2>`;
    list.innerHTML += `<h3>${e. std_id}</h3>`;
    list.innerHTML += `<h3>${e.courses }</h3>`;
    list.innerHTML+=`<h4>${e._id }</h4>`
    
  });

});


         /// DELETE METHOD///
let del=document.querySelector("#form1");
let input1=document.querySelector("#id_del")



 
del.addEventListener("submit",async e=>{
  e.preventDefault();
  let input = document.querySelector("#id_del").value;


let url =`http://localhost:4000/api/students/${input}`;
 await window.fetch(url,{
method:"DELETE"
});

});



///////update section ///

let form2=document.querySelector("#from2")

form2.addEventListener("submit",async e=>{
  e.preventDefault();
  let std_name = e.target[0].value;
  let std_id = e.target[1].value;
  let std_email = e.target[2].value;
  let std_courses= e.target[3].value;  


let payload={
  name:std_name,
  std_id:std_id,
  email:std_email,
  courses:std_courses,
}
let url ="http://localhost:4000/api/students/620781ba2f7e305806924252";
let body = await window.fetch(url,{
method:"PUT",
headers:{
  "Content-Type":"application/json;charset=utf-8"

},
body:JSON.stringify(payload),
});
console.log(body);

});














// {{BASE_URL}}/api/students/62062a03863cd17b8d3607a5










