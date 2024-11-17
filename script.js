const passwordbox = document.getElementById("password");
const length = 12;
 


let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+-=<>/?:;{}[]";

const allchars = uppercase + lowercase + numbers + symbols ;


function generatepassword(){
    let password = "";

password += uppercase[Math.floor(Math.random() * uppercase.length)];
password += lowercase[Math.floor(Math.random() * lowercase.length)];
password += numbers[Math.floor(Math.random() * numbers.length)];
password += symbols[Math.floor(Math.random() * symbols.length)];

while(length > password.length){
password += allchars[Math.floor(Math.random() * allchars.length)];
}
passwordbox.value= password;
}

function copypassword(){
    passwordbox.select();
    document.execCommand("copy")
}