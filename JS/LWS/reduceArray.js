var array = [1,2,3,4,5];
var result = array.reduce((previousValue,currentValue,currentIndex,array)=>{
    //console.log('current index: ',currentIndex);
   // console.log('value :',previousValue);
    return previousValue+currentValue;
},0);   //at first current value is 1 but there is no previous value,that's why we made 0 as previous value

console.log(result);