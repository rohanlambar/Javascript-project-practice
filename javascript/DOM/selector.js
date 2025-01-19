//element selector = methods used to target and manipulate HTML elements They allow you to select
//                     one or multiple HTML elements from the DOM (Document Object Model)

// 1.document.getElementById() // ELEMENT or NULL
// 2.document.getElementsClassName() // HTML collection
// 3.document.getElementByTagName() // HTML COLLECTION
// 4.document.querySelector() // first Element or null
// 5.document.querySelectorAll() // NODELIST

// getElementById()
const display = document.getElementById("my-header");
 display.style.backgroundColor = "yellow";



//getElementByClassName()
const fruits = document.getElementsByClassName("fruits");
// for(let fruit of fruits)
// fruit.style.backgroundColor = "yellow";
// Array.from(fruits).forEach(fruit => {fruit.style.backgroundColor = "red";})

//getElementByTagName()
const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);
for(let h4element of h4Elements)
     h4element.style.backgroundColor = "blue";
const liElements = document.getElementsByTagName("li");
console.log(liElements);
for(let lielement of liElements)
     lielement.style.backgroundColor = "lightgreen"; 

//document.querySelector() = get reference to first elmenent satisfying query
const fruit = document.querySelector(".fruits");
fruit.style.backgroundColor = "yellow";

// document.querySelectorAll() 
const foods = document.querySelectorAll(".fruits");
foods.forEach(food => {food.style.backgroundColor ="yellow";})