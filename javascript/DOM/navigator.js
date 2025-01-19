// DOM navigator = are tools to navigate through html elements through java scripts
//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children
//*****************.firstElementChild */
// const element = document.getElementById("desserts");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";



//*****************.lastElementChild */
// const element = document.getElementById("vegetable");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "red";

// ****************.nextElementSibling
// const element = document.getElementById("orange");
// const nextElement = element.nextElementSibling;
// nextElement.style.backgroundColor = "lightblue"; 

//*****************.previousElementSibling */
// const element = document.getElementById("desserts");
// const previousElement = element.previousElementSibling;
// previousElement.style.backgroundColor = "blue";

// *****************.parentElements
// const element = document.getElementById("apple");
// const parent = element.parentElement;
// parent.style.backgroundColor = "lightgreen";

//****************.children */ // html collect;
const element = document.getElementById("desserts");
const children = element.children;
Array.from(children).forEach(child => child.style.backgroundColor = "orange");