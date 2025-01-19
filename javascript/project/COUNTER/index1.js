let count = 0;
const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const increaseButton = document.getElementById("increaseButton");
const countText = document.getElementById("countLabel");
const previousColor = resetButton.style.backgroundColor;
function changeColor(button){
    decreaseButton.style.backgroundColor =previousColor;
    resetButton.style.backgroundColor =previousColor;
    increaseButton.style.backgroundColor = previousColor;
    button.style.backgroundColor = 'red';
}
decreaseButton.onclick = function() {
    count--;
    countText.textContent = count;
    changeColor(decreaseButton);
}

resetButton.onclick = function() {
    count = 0;
    countText.textContent = count;
   changeColor(resetButton);

}

increaseButton.onclick = function() {
    count++;
    countText.textContent = count;
   changeColor(increaseButton);

}


