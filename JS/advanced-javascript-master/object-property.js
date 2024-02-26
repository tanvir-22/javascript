const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'}
];

const student = students.map(element => element.name)
console.log(student);
const id = students.map(element => element.id);
console.log(id);
const bigger = students.filter(element => element.id>40);
console.log(bigger);
const imediateLargeOne  =students.find(element => element.id>40);
console.log(imediateLargeOne);


// const array=[];
// for(let i=0;i<students.length;i++){
//     elements = students[i].name;
//     array.push(elements);
// }
// console.log(array);