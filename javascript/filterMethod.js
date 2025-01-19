// filter helps filtering out numbers from given array to a new array
let numbers = [1,2,3,4,5,6];


function isOdd(element){

    return element%2 !== 0;
}
function isEven(element){
    return element%2 === 0;
}

let oddNumber = numbers.filter(isOdd);
let evenNumber = numbers.filter(isEven);
console.log(oddNumber);
console.log(evenNumber);


let ages =[12,45,34,12,32]
let adults = ages.filter(isAdult);
function isAdult(element){
    return element >= 18;

}
console.log(adults);
function isChild(element){
    return element < 18;
}
let children = ages.filter(isChild);
console.log(children);
console.log(ages);