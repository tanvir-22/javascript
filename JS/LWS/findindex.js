const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;//it's a function

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
const print = ()=>console.log("hi");
print();
let arr=[3,56,78,97];
const c = arr.splice(0,1);//start index and how many element from that index
console.log(arr);

arr2=[25,78,45];
var result = Math.max(...arr,...arr2);
console.log("max is:"+result);