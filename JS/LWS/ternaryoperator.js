let age = 7;
var type = (age>=18)?"adult":"child";//if true condition then adult if false then child
console.log(type);

var type1 = (age>=18)?'adult':(age<10)?'very child':"young";
console.log(type1);

var arr =[24,5,6453,24];
var result = arr.map((element)=>element*element);
console.log(result);
