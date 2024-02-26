const person ={name:"john doe",age:27,job:"facebooker",gfname:"ema watson",address:"banani",phone:"45084",friends:["jamal","kamal","hasan"]};
console.log(person.gfname);
// const gfname = person.gfname;
// console.log(gfname);
const { phone,gfname } = person;
console.log(phone,gfname);