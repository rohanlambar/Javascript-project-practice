// spread operator ... is to unpack a elements from array
let fruits = ["orange","banana","apple"];
let vegetable = ['ladyfinger','greenpea','brinjal']
let foods =[...fruits,...vegetable,"eggs","fishes"];
console.log(foods);

let numbers = [3,4,3,2,1]
let minNum = Math.max(...numbers);
console.log(minNum);