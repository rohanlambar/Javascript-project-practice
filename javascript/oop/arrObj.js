const fruits = [{name :"apple",color:"red",calories:135},
                {name :"orange",color:"orange",calories:185},
                {name :"coconut",color:"brown",calories:187},
                {name :"pineapple",color:"yellow",calories:195},
                {name :"mango",color:"yellow",calories:205},
]
// forEach
fruits.forEach(fruit => console.log(fruit.name));

//map
let fruitName = fruits.map(fruit => fruit.name);
console.log(fruitName);

//filter
let yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);
// reduce 
let maxCalories = fruits.reduce((accumulator,element) => accumulator.calories > element.calories ? accumulator.name : element.name)
console.log(maxCalories);
let minCalories = fruits.reduce((accumulator,element)=> accumulator.calories < element.calories ? accumulator.name : element.name)
console.log(minCalories);