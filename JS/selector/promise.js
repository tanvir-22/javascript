const mypromise = new Promise((resolve,reject)=>{
    let message = false;
    if(message){
        resolve("running from promise");

    }
    else{
        reject(new Error("something went wrong!"));
    }
})
mypromise.then((res)=>{
    console.log(res);
}).catch(error=>{
    console.log(error.message);
})
