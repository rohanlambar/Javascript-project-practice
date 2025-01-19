// apply() method is very similar to call() method but only different in call() individual arguments are passed and
//in apply() list of arguments are send
// syntax
// funcName.apply(thisArgs,[arg1,arg2,arg3])

// apply() with this arguments

function printData(){
    console.log("model of car ",this.model)
    console.log("mileage of car ",this.mileage)
}
const obj = {
    model :"Audi8",
    mileage:30
}
printData.call(obj)

// apply() with this arguments and list of arguments

function sum(a,b){
    console.log("sum ",a+b+this.num);
}

const number = {
    num:34
}
sum.apply(number,[34,34])


// apply for built-in function 

numbers = [34,453,34,23445]
let maxNum = Math.max.apply(null,numbers)
console.log("max number",maxNum)
let minNum = Math.min.apply(null,numbers)
console.log("min numbers",minNum)

