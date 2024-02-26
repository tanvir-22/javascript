const name = "jamal uddin";
// name = "json";//will show error not changeable
console.log(name);

const array = [22, 44];
array[1] = 33;

array.push(11);
console.log(array);
// array = ["jamal","kamal","hasan"];//will show error can't change type 

const nayok = { name: "sakib khan", phone: "342364" };
nayok.name = "hasan";
console.log(nayok);
var sum = 0;
for (var i = 0; i < 10; i++) {
    sum += i;
}
console.log(i);//i is accessable from outside of for loop 
for (let j = 0; j < 10; j++) {
    sum += j;
}
console.log(j);//will show error because let .j is not accessable from outside of loop