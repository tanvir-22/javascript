class Parent{
    constructor(){
        this.fathername = "schwerzenneger";
    }
}
class Child extends Parent{
    constructor (name){
        super();
        this.name = name;
    }
    getFullname(){
        return this.name+" "+this.fathername;
    }
}
const baby = new Child("Arnold");//new object
const baby2 = new Child("Tom");

console.log(baby);
console.log(baby2);
console.log(baby.getFullname());
console.log(baby2.getFullname());
