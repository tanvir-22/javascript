var speech = "i am a   good person. i don't like eating beef";
var count=0;
for(var i = 0;i<speech.length;i++){
    var c = speech[i];
   
    if(c == " " && speech[i-1]!=" "){
        count++;
    }
}
count++;//because after break there is no space
console.log(count);

