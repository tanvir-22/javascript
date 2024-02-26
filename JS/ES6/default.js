function add(num1, num2) {//es6 add(num1,num2=0)
    num2 = num2 || 0;
    return num1 + num2;

   
}

let k = add(12);
console.log(k);
// if(num2==undefined){//instead u can use this num2=num2||0;}
// num2=0;