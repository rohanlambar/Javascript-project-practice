//step 1 : create a element 
// const element = document.createElement("h1");

const newListItem = document.createElement("li");
// step 2 : add attribute 


// element.textContent = "hello";

newListItem.textContent = "banana";
newListItem.id = "banana";
//step 3 append the element 
// document.body.append(element);
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);
const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem,orange);
//step 4  delete the element 
// document.body.removeChild(element);
// document.getElementById("fruits").removeChild(newListItem);