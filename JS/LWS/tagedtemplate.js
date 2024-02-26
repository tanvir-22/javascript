function modifier(Strings,...values){
    console.log(Strings);
    console.log(values);
    const m = Strings.reduce((prev,current)=>{
        return  prev+current+(values.length?"Mr."+values.shift():"");
    },"")
    return m;
}
var player1 = "sakib";
var player2 = "tamim";
console.log(modifier`we have ${player1} and ${player2} in our cricket team.`);
