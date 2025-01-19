// destructuring = is a process to separate element of array or object and
// assign it to variable in a convenient way
//[] = for array destructuring
// {} = for object destructuring 

//**************************************example 1************** */
// swaping variable 
let a = 1;
let b = 2 ;
[a,b] = [b,a];
console.log("value of a ",a);
console.log("value of b ",b);

/**********************************example 2 */
// swaping array element position 
let colors = ["red","orange","black","blue","gerua"];
[colors[0],colors[1]] = [colors[1],colors[0]];
console.log(colors);


/******************************example 3 */
// storing array element in variable 

let [firstColor,secondColor,...remainingColors] = colors
console.log(firstColor);
console.log(secondColor);
console.log(remainingColors);


//storing object properties in variable 
const person1 = {
    name:"Ash",
    lastName :"Ketchum",
    job :"Pokemon Trainer",
    dream :"Pokemon Master"

}

let {name,lastName,job,dream,trophy = "none"} = person1;
console.log(name);
console.log(lastName);
console.log(job);
console.log(dream);
console.log(trophy);

// destructuring argument passed to function 
function display({name,lastName,job,dream,trophy="none"}){
    console.log("inside function")
    console.log(name);
console.log(lastName);
console.log(job);
console.log(dream);
console.log(trophy);
}
display(person1);


