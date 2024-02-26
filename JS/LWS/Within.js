let array = ["java","python","c++","ruby","rails"];
const z = array.copyWithin(2,1);//copy will start from index no 1 to array.length
                                //copied value will paste from index no 2
// console.log(z);
// console.log(array);//it overwrites the main array
let arr = ["java","python","c++","ruby","rails"];
const result = arr.copyWithin(2,1,2);//target is c++ //copy will start from index1 //and copy will end before index 2
console.log(result);
