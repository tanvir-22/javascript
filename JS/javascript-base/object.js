var student = { id:121,phone:29754957,name:"shafin"};
console.log(student);
var student2 = {id:122,phone:45485764,name:"jamal"};
console.log(student2);

var phoneNO = student.phone;//there are three system to access in object property
//system-1

var idno = student["id"];

//system-2
var Sname = "name";
var ssname = student[Sname];

//system-3

student2.id = 100000;//update property in object
student2["id"] = 200000;//there is also three system
// student2[ssname] = 2797347;




// console.log(student);
// console.log(student2);
console.log(phoneNO);
console.log(idno);
console.log(ssname);

console.log(student2);
student.cinema = "titanic"; //adding more properties
console.log(student);