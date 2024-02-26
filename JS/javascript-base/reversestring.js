
function rev(s){
    var reverse = "";//default value
for(var i = 0;i<s.length;i++){
    var c = s[i];//shafin = [s]=[h]=[a]
    reverse = c+ reverse;//[00000s]=[0000hs]=[000ahs] 
}
return reverse;
}
var k = "shafin";
var r = rev(k);
console.log(r);