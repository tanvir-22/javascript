const payment = false;
const mark = 100;
function enroll(callback) {
    console.log("payment is in progress...");
    setTimeout(function () {
        if (payment) {
            callback()
        }
        else {
            console.log("payment is not paid");
        }
    }, 2000)
}
function progress(callback) {
    console.log("course is in progress...");
    setTimeout(function () {
        if (mark >= 80) {
            callback()
        }
        else {
            console.log("you don't have enough mark for certificate");
        }
    }, 3000)
}
function getcertificate() {
    console.log("preaparing your certificate....");
    setTimeout(() => {
        console.log("congratulations! here is the certificate😎");
    }, 100)
}
enroll(function () {
    progress(getcertificate)
});