// function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
//   function myDisplayer(name){
//     console.log(name);
//   }
//   myFirst();
//   mySecond();
function display(sum){
    console.log(sum);

}

function calculator(num1,num2,callback){
    let sum=0;
    sum=num1+num2;
    if(callback){
        callback(sum)
    }
    return sum;    
}
calculator(10,10,display)
const result = calculator(5,5);
console.log(result);

