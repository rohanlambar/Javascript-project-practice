// reduce() method is use to reduce array element to single element 
const numbers = [1,2,3,4,5]
let sum = numbers.reduce(add);
function add(accumulator,element){
    
     return accumulator;
}
console.log(sum);
const  prices = [34,3423,234,545];
const maxPrice = prices.reduce(maxElement);
function  maxElement(accumulator,element){
    return Math.max(accumulator,element);
}
console.log(maxPrice);