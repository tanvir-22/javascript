var array = [5,20,6,10];
var max= -1;
for(var i = 0;i<array.length;i++){
    // var k = array[i];
    if(array[i]>max){
       max = array[i];
    }
}
console.log("highest value is : ",max);

//sum of array 

var array1 = [2,3,5,7];
let sum = 0; 
for(var i = 0;i<array1.length;i++){
    sum+=array1[i];
}
console.log("the sum of array1 is : ",sum);