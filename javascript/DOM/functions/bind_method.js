// apply() creates new function with this value and optional arguments without involvement of original  function
// syntax 
//functionToBind.bind(thisArgs,arg1,arg2)
function greet(message){
    console.log(message+","+this.name)
}
const friend = {
    name : "nitin"
}
const greetFriend = greet.bind(friend,"hello")
greetFriend();


// binding different object with same function 

const point1 = {
     x:100,
     y:500,
}

const point2 = {
    x:300,
    y:550,
}

function getVal(){
    console.log("x = "+this.x+" , y = "+this.y)
}

const valPoint1 = getVal.bind(point1)
const valPoint2= getVal.bind(point2)
valPoint1()
valPoint2()


//setting the default parameter of a function 
function multipler(x,y){
console.log("multiplication ",x*y)

}

const nextMul = multipler.bind(null,4);//setting the first parameter as default
nextMul(5)// calling with just second parameter



