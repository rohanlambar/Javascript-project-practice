// sort method sort lexicographically 
let fruits = ["apple"," banana","mango","pineapple"];
let newfruits = fruits.map(fruit => fruit.trim())
newfruits.sort();
console.log(newfruits);
let numbers = [1,5,7,6,4,3,2,8,9,10];
numbers.sort((a,b)=>b-a);
console.log(numbers);