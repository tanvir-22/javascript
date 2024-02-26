// var array = [3,5,6,3,5,2,1,4,5,10];
// var newarray = [];
// for(var i = 0;i<array.length;i++){
//     var elememt = array[i];
//     var index = newarray.indexOf(elememt); //check if the element in array is present in newarray
//     if(index == -1){
//         newarray.push(elememt);
//     }

// }
// console.log(newarray);

var array = [3,4,3,2,2,5,1,1,4,7];
console.log("before: "+array);
var newA = [];
for(var  i=0;i<array.length;i++){

    var elememt =array[i];
    var index = newA.indexOf(elememt);
    if(index==-1){
        newA.push(elememt);
    }
   
}
console.log("after removing duplicate: "+newA);