class student{

    constructor(id,name){
        this.id = id;
        this.name = name;
        this.school="modern school"
    }

}
const student1 = new student(12,"shafin");
const student2 = new student(33,"kamal");
console.log(student1.name,student2.name);
console.log(student1);
