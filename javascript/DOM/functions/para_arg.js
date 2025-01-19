// parameter are variable inside function parenthesis
/*
function function_name(argument1,argument2..){
 statement
}
*/

function add(x,y)// no need to specify data type of argument
{
    return x+y;
}
let res = add(5,6);
console.log("result ",res);
// all arguments send to function is store in arguments array which can be accessed
function merge(){
    let final = "";
    for(str of arguments){
        final += str+" ";
    }
    return final;
}

let ans = merge("hello","nitin","bye");
console.log(ans);

// argument call by reference is done using object
var obj ={
    boy:"nitin"
}

function change(obj){
    obj.boy = "mohit";
}

console.log(obj.boy);
change(obj);
console.log(obj.boy);

