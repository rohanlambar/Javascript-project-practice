const myBox = document.getElementById("myBox");
let x = 0;
let y = 0;
let move = 100;
document.addEventListener("keydown",event=>{
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "NOOO!!";

})
document.addEventListener("keyup",event=>{
    myBox.style.backgroundColor = "lightblue";
    myBox.textContent = "Lets go";

})
document.addEventListener("keydown",event=>{
  
    if(event.key.startsWith("Arrow")){
    switch(event.key){
        case "ArrowUp":
        y -= move;
        break;
        case "ArrowDown":
            y += move;
            break;
        case "ArrowLeft":
                x -= move;
                break;
        case "ArrowRight":
                    x += move;
                    break;
    }
    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;

   }

})