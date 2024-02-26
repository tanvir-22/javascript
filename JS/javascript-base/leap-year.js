let y=2020;
console.log(y%4);
console.log(y%100);
console.log(y%400);

if((y%4==0 && y%100!=0)||(y%400!=0))
{
    console.log("leap year! "+y);
}
else{
    console.log("not leap year: "+y);
}