// function doubleit(num){
//     return num*2;
// }


// const doubleit = function myfun(num){ //another way to create function 
//     return num*2;
// }

//another way 
const doubleit = (num)=> num*2;//es6 system //single parameter
//here num is parameter
//and num*2 is return statement

const result = doubleit(50);
console.log(result);
const add = (a, b) => a + b;//two parameter 
const result1 = add(100, 100);
console.log(result1);
const showfive = () => 5;
var result2 = showfive();
console.log(result2);

const bishal = (a, b) => {    //multistatement function 
    const sum = a + b;        //here bishal is function name
    const multp = a * b;
    const total = sum + multp;
    return total;//must use return 
}
const bishalResult = bishal(3, 4);
console.log("bishal result: " + bishalResult);