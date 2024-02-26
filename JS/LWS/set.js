const myset = new Set();
myset.add(5);
myset.add(55).add("dhaka")
myset.add("bangladesh").delete(5);
// myset.clear();
console.log(myset);
console.log(myset.size);
let myarray = [2, 3, 5];
let Myset = new Set(myarray);
console.log(Myset);
let Myset1 = new Set('shafin');
console.log(Myset1);
for (let value of Myset1) {
    console.log(value);
}

console.log([...Myset1]);//set to array
console.log(Array.from(Myset1));//set to array
let samevalue = [1,3,3,3,4,55,6,1,2,2,4];
console.log([...new Set(samevalue)]);//we converted array to set and again set to array
//to remove the simillar value
//as set don't keep same value
let a = new Set([1,2,3]);//a is a set
let b = new Set([4,5,3]);//b is a set
let union = new Set([...a,...b]);
let intersection = new Set([...a].filter(x=>b.has(x)));//finds the common element of two set
console.log(a);
console.log(union);
console.log(intersection);


//weakset
//must add object in weakset
const ws = new WeakSet();
const result1 = ws.add({a:1});
console.log(result1);
const ws1 = new WeakSet();
class some{
    constructor(){
            ws1.add(this);
    }
    method(){
        if(!ws1.has(this)){
            throw new Error("you can't access method directly")
        }
        else{
            return "i ama method"
        }
    }
}
const ax = new some();
ax.method();
// log(Some.prototype.method());
