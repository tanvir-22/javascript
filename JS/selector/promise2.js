const payment = true;
const mark = 90;
function enroll() {
    console.log("payment is in progress...");
    const promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (payment) {
                resolve("payment completed.")
            }
            else {
                reject("payment is due")
            }
        }, 2000);
    })
    return promise;
}
function progress() {
    console.log("course is in progress...");
    const promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (mark >= 80) {
                resolve()
            }
            else {
                reject("you don't have enough mark for certificate");
            }
        }, 2000)

    })
    return promise;
}
function getcertificate() {
    console.log("preparing certificate");
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("congratulations ! here is your certificate😎")
        }, 1000)
    })
    return promise;
}
enroll()
.then((value)=>{
    console.log(value);
})
.then(progress)
.then(getcertificate)
.then((value) => {
    console.log(value);
})
.catch((err) => {
    console.log(err);
})