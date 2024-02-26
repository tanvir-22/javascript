var javascript = {
    name:"javascript",
    libraries:["React","Angular","Vue"],
    printlibraries:function(){
        var self = this;
        // console.log(this);
        // console.log(self);
        this.libraries.forEach(function(a){
            // console.log(this);
            console.log(`${self.name} loves ${a}`)
        })
    }
}
javascript.printlibraries();

//after arrow function

var javascript = {
    name:'javascript',
    libraries:["react",'angular','vue'],
    printlibraries1:function(){
        this.libraries.forEach((x)=>{  //here is the change
                                        //arrow function don't interrapt this keyword
            console.log(this);
            console.log(`${this.name} hates ${x}`);
        })
    }
}
javascript.printlibraries1()