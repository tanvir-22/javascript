const start = new Date();
let sum =0;
for(let i=0;i<100000;i++){
    sum+=i;
}
const end = new Date();
console.log("elapsed Time: ",end-start);