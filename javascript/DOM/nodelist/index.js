
let btns = document.querySelectorAll("button");

btns.forEach(button=>{
    button.addEventListener("click",(event)=>{
        event.target.style.backgroundColor = "tomato";
    })
})
btns.forEach(button=>{
    button.addEventListener("mouseover",(event)=>{
        event.target.style.backgroundColor = "blue";
    })
})
btns.forEach(button=>{
    button.addEventListener("mouseout",(event)=>{
        event.target.style.backgroundColor = "lightblue";
    })
})

// adding a button 
//step1 create button 
const newButton = document.createElement("button");
// step2 giving attributes
newButton.textContent = "Button 5";
newButton.classList = "btns";

// step 3 append
document.body.append(newButton);
//adding to nodeList
btns = document.querySelectorAll("button");


btns.forEach(button=>{
    button.addEventListener("click",(event)=>{
        event.target.remove();
btns = document.querySelectorAll("button");

        console.log(btns);

    })
})
btns.forEach(button=>{
    button.addEventListener("mouseover",(event)=>{
        event.target.style.backgroundColor = "blue";
    })
})
btns.forEach(button=>{
    button.addEventListener("mouseout",(event)=>{
        event.target.style.backgroundColor = "lightblue";
    })
})

