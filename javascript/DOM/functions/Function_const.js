//syntax for Function constructor 
//    const function_name = new Function(arg1,arg2....,function_body);
//

const sum = new Function("a","b","return a+b")
console.log(sum(12,12));

const sayHello = new Function(
    "return function (name) {return `hello, ${name}`}",
)();
console.log(sayHello("rohan"));


// self invoking function 
// (function () {
//     // function body
//  })();
// (function (para) {
//     // function body
//  })(args);
console.log("self invoking function");
(function (name){
    console.log(`hello, ${name}`)
}("rohan "));