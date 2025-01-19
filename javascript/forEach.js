// forEach method iterate over all element of array and apply callback function to all element
let food = ["apple","orange","banana"];
food.forEach(Capitalize);
food.forEach(display)
function Capitalize(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();

}
function display(element){
    console.log(element);
}