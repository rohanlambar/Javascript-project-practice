
const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click",event=>{
    myBox.style.backgroundColor="tomato";
    myBox.textContent = "Ouch!!!"
})
myBtn.addEventListener("mouseover",event=>{
    myBox.style.backgroundColor="yellow";
    myBox.textContent = "nahi nahi !!!"
})
myBtn.addEventListener("mouseout",event=>{
    myBox.style.backgroundColor="lime";
    myBox.textContent = "Click me!!!";
})