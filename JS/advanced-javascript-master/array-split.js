const nums = [6,7,8,9,4,3,2];
const part = nums.slice(2,5);//it dont change the orginal array
// console.log(part);

const removed = nums.splice(2,3, 77);//it changes the orginal array //also you can add new element
// console.log(removed);
// console.log(nums);

const together = nums.join(",")
console.log(together);
