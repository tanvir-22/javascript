const normalperson={
    firstname:"shafin",
    lastname:"rahman",
    salary:120848,
    getfullname:function(){
        console.log(this.firstname+this.lastname);
    },
    chargebill:function(amount){
        console.log(this);
        this.salary=this.salary-amount;
        return this.salary;
    },
}
// normalperson.chargebill(848);
// normalperson.chargebill(200);
// console.log(normalperson.salary);
const heroperson={
    firstname:"kalam",
    lastname:"rahman",
    salary:25000,
}

const herochargebill = normalperson.chargebill.bind(heroperson);//use normalperson chargebill method 
herochargebill(2000);
// herochargebill(2000);
// console.log(heroperson.salary);
normalperson.chargebill.call(heroperson,500);//alternative of blind method direct call+parameter passing.
console.log(heroperson.salary);                 //here you can pass multiple parameter using coma

const friendlyperson={
    firstname:"kalam",
    lastname:"rahman",
    salary:35000,
}
normalperson.chargebill.apply(friendlyperson,[3000]);//it is same as call but u have to pass the parameters using an array
console.log("friendlyperson salary: "+friendlyperson.salary);