// arrow function is a alternative to declaration of a function 
const add = (x,y)=> {
    return x+y;
}
console.log(add(9,0));

// syntax
// const varName = (para1,para2,...)=>{
//     statement
// }

// arrow function without arguments
const greet = ()=>{console.log("hello")};
// arrow functuoin with arguments
const Greet = (name = "nitin")=>{console.log(`hello,${name}`)}
greet();
Greet("rohan");
Greet();