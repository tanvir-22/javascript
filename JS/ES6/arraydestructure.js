const friends = ["sakib khan","arman khan","amir khan","salman khan","jamal khan"];
const [firstfriend,secondfriend,...oldfriend] = friends;
console.log(firstfriend,secondfriend);
console.log("old friend: "+oldfriend);
