// declaration of function 

/*
function function_name{
statement 
}
*/
function add(x,y){
    return x+y;
}
console.log(add(3,5));

// function expression 
let squareSum = function(x,y){
    return x+y;
}

console.log(squareSum(4,5));

//immediately invoked function 
(function greeting(name){
    console.log("hello "+ name);
})("rohan");

// using function expression 
const num = function(){
    return 7;
}

let result = num() * 20;
console.log("result "+result);
