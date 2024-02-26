let bonus = 20;//global variable

function sum(first, second){
    let result = first + second + bonus;
    // console.log(bonus);//bonus is accessable from inside the function it global
    if(result > 9){
        var mood = "happy";
        mood = "fishy";
        mood = 'funky';
        mood = "cranky"
        console.log(mood);
    }
    console.log(day);
    let day = "friday";//if it is var then it will show undefined
    //                     //but let and const will show error
    
    return result;
    
}

const output = sum(3, 7);
console.log(bonus);
console.log(output);