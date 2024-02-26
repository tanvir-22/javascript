const ages = [12, 14, 16, 18];
const ages1 = [33, 35];
const ages3 = [65, 67];
const allage = ages.concat(ages1).concat([2]).concat(ages3);
console.log("concat: "+allage);
const allage2 = [...ages, ...ages1, 5, ...ages3];
console.log(" three dot: "+allage2);//threedot return arrray
const takapoisha = [200, 600, 3200];
const max = Math.max(...takapoisha);
console.log(max);