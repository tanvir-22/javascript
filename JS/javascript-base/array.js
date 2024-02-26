var friendsAge = [15,17,18,21,10];
var sonaliAge = friendsAge[2];
friendsAge[4]=22;//update array element
console.log(sonaliAge);
console.log(friendsAge);


var position = friendsAge.indexOf(15);//to check index no. 0f an element in array
console.log(position);
friendsAge.push(100);
friendsAge.push(1000);//to add elememt in array from back

console.log(friendsAge);
console.log(friendsAge.length);//array length
friendsAge.pop();//to eleminate last array element
console.log(friendsAge);
var array = [1,2,3];
var firstElement = array.shift();//to eleminate element from begining index
console.log(array);
var insertFirst = array.unshift(22);//to insert element in the begining
console.log(array);
var teaLine = ["kalam","salam","balam"];
console.log(teaLine);
teaLine.push("jhanker");
console.log(teaLine);
// teaLine.shift();
console.log(teaLine);
a = [1,5,3,2,6];
var part = a.slice(1,3);//it slice arrary using index sliced index is the output
console.log(part);
var qrr = [66,77,88,99,22];
console.log("result: "+qrr.shift());