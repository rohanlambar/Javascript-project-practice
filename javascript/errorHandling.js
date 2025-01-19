// error = an object which represent error in the program than occurs due user input or establishing connection 
//try{} = Encloses code the might give error
// catch{} = catches or handles error thrown by try block
// finally{} = always executes .used mostly for clean up 
// ex.close files,close connections , release resources

// try{
//     console.log("hello");
//     //network errors
//     //promise rejection
//     // security errors

// }
// catch(error){
//     console.error(error);
// }
// finally{
//     //close files
//     //close connections
//     //release resources 
//     console.log("this will execute always");
// }
// console.log("end of code");

try{
    const divided = Number(window.prompt("enter dividend"));
    const divisor = Number(window.prompt("enter divisor"));
    if(divisor == 0) throw new Error("you can't dividend by 0");
    if(isNaN(divided)||isNaN(divisor)) throw new Error("enter numbers ");
    let result = divided/divisor;
    console.log(result);


}
catch(error){
    console.error(error);
}
console.log("you have reached the end");