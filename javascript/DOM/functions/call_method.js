// each function in javascript is a object .which have few important method call(),apply(),bind()
// funcName.call(ThisArg,arg1,arg2....)
// call() without arguments
function printHello(){
    console.log("hello world!");
}
printHello();
printHello.call();

// call() with one arguments
function print_name(){
    console.log("Name of person is ",this.name);
}

const student1 = {
    name:"rohan",
    department:"computer"
}
print_name.call(student1);

// call() multiple argument
function sum(a,b){
    return this.num1+this.num2+a+b;
}

const num ={
    num1 : 23,
    num2 : 32,
}

console.log(sum.call(num,45,56))

// using method of different object 

const student = {
     getAge : function(){
         console.log("age is ",this.age);
    }
}

const student8 = {
    age :23,
}

student.getAge.call(student8);