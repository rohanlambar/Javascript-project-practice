//get username which is part of email before '@' from email
const email = "rohan98@gmail.com";
let username = email.slice(0,email.indexOf('@'));
let extension = email.slice(email.indexOf("@")+1);
console.log(username);
console.log(extension);
