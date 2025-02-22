// var email = document.getElementById("email");
// var pswd = document.getElementById("pswd");

// function validate() {
//     if (email.value == '' || pswd.value == '') {
//         alert("field cannot be empty");
//         return false;
//     }
//     else {
// return true;
//     }
// }

 var email = document.getElementById("email");
var pswd = document.getElementById("pswd");

function validate() {
    if(email.value.trim() == '') {
        alert("email cannot be empty");
        return false;
    }
    else if(pswd.value.trim() == '') {
        alert("password cannot be empty");
        return false;
    }
    else if(pswd.value.length <= 5) {
        alert("password too short");
        pswd.style.border="2px solid red";
        return false;
    }
    else{
        return true;
    }
}


var e=document.getElementById("e");
var error=document.getElementById("error");

console.log(e.value);

function validate() 
{
    console.log("fun")
    console.log(e.value);
let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
console.log(e.value);
if(regexp.test(e.value))
{
    console.log("entered");
    error.innerHTML="valid email ID";
    error.style.color="green";
    return true;
}
else
{
    error.innerHTML="invalid email id";
    error.style.color="red";
    return false;
}
}