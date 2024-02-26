var a = 5;
var b=9;
var temp;
temp = a;
a = b;
b = temp;
console.log("a = "+a);
console.log("b = "+b);


var x = 5;
var y = 7;
x = x+y;//12
y = x-y;//12-7=5
x = x-y;//12-5=7
console.log("after swap x = ",x,"y = ",y);



var p =9;
var q =1;
[p,q] = [q,p];
console.log("after swap p = ",p,"q = ",q);
