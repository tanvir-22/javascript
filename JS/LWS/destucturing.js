const myobj = {
    name:"sakib",
    prof:'cricket',
    age:32
}
// const name = myobj.name;
// console.log(name);
// const name1 = myobj['name'];
// console.log(name1);
  const {name}=myobj    //here name is another constant
  console.log(name);
  const {name:title} = myobj;//here title is a constant
  console.log(title);
  const user={
    id:2,
    name:"jamal",
    age:'100',
    education:{
        degree:"Masters",
    },

  }
  const {education: {degree}}=user;//{degree:x}
  console.log(degree);//log(x)
  const User={
    id:2,
    name:"jamal",
    age:'100',
    // education:{
    //     degree1:"Masters",
    // },

  }
  const {education:{degree1}={}}=User;
  console.log(degree1);

  //array destructureing

  var array = [44,66,7,43,22];
  var [a,,,,b] = array;
  console.log(a,b);
  var arr = [2,4,56,[45,66],33];
  var [ ,,,[a,b],]=arr;
  console.log(a,b);

  //swaping an array
  var x=66
  var y=22;
  [y,x]=[x,y]
  console.log("x: "+x+" y:"+y);