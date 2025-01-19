



// getting the container which stores tasks
const container = document.getElementsByClassName("tasks")[0]; 
let taskCounter = 0;
// to do list logic

// enter key 
document.addEventListener("keydown", (event) =>{
       if (event.key === "Enter") add_element();
})
function createATask(taskText){
       // creating a task div 
const task = document.createElement('div');
// adding the class .task to it 
task.classList.add('task')
// creating a radio button 
const radio = document.createElement('input');
// assign the input type 
radio.type = "radio";
// creating a button a button element 
const button = document.createElement('button')
button.dataset.id = taskCounter++;
// assigning the textContent 
button.textContent = "Cancel";
// appending the radio button first
task.append(radio);
// appending text to task div
task.append(document.createTextNode(taskText));
// appending cancel button to task div 
task.append(button);
task.draggable = true;
// appending custom div to container
 // Add drag event listeners

container.append(task);

}
function add_element(){

// getting value entered as todays task 
const taskText = document.getElementById("data").value;
// if empty task submitted don't take value 
if(taskText === "") return ;
//creating a task with all features
createATask(taskText);
// call a function to store Dynamically created DOM to localstorage 
saveToLocalStorage();
// after data enter to entry field it's value set to place holder back
document.getElementById("data").value = "";

}

// functionality to delete a task on click cancel button 
 document.getElementsByClassName('tasks')[0].addEventListener("click", eve => {
       
       if(eve.target.tagName === "BUTTON"){ 
             
              eve.target.parentElement.remove();
              
              deleteFromLocalStorage(eve.target.dataset.id);
              window.alert("task deleted successfully");
       }

});

// event 
function handleDragStart(event) {
       event.dataTransfer.setData('text/plain', event.target.id);
       event.target.style.opacity = '0.5'; // Visual feedback during drag
   }
   
   function handleDragEnd(event) {
       event.target.style.opacity = '1'; // Restore opacity after drag
   }
   
   window.addEventListener('dragover', (event) => {
       event.preventDefault(); // Necessary to allow dropping
   });
   
   window.addEventListener('drop', (event) => {
       event.preventDefault();
       const task = document.querySelector('.dragging');
       if (task) {
           const x = event.clientX;
           const y = event.clientY;

           task.style.left = `${x}px`;
           task.style.top = `${y}px`;
       }
   });
// function to store dynamically create DOM element to localstorage 
// it first get newly created element from getElementByClassName() which return a live HTMLCollections
// then it converted to array and use map function JSON is created for each element which stores text of each task
// then which localStorage.setItems taskArray is stored in JSON format 
function saveToLocalStorage(){
       // accessing dynamically created tasks
       const tasks  = document.getElementsByClassName('task');
   // converting in a array object 
   const taskArray = Array.from(tasks).map( (task,index) => {
       return {
              text : task.childNodes[1].textContent.trim(),// creating a JSON 
              id : task.querySelector('button').dataset.id,// storing index as id 
             
       } 
   })
localStorage.setItem("tasks",JSON.stringify(taskArray));// storing data in localstorage
 
}
// delete from localStorage 
 function deleteFromLocalStorage( targetid ){
       
       // accessing all task from localStorage 
       let taskArray =  JSON.parse(localStorage.getItem('tasks')) || [];
       // filtering the deleted task
    
       taskArray = taskArray.filter(task => task.id != targetid);
       // reassign taskArray in localStorage
     
       localStorage.setItem('tasks', JSON.stringify(taskArray) );
}




// getting already stored data in localStorage to DOM 
function getData(){
       // getting data from localStorage 
       const taskData = JSON.parse(localStorage.getItem('tasks')) || [];
       // accessing container which stores tasks 
       const container = document.getElementsByClassName("tasks")[0];
       // using forEach method to iterate to each element in taskData and append a custom task div to container 
       taskData.forEach( taskText => {
              // created a task div which available properties
                                   createATask(taskText.text);
       })

}
window.onload = getData;