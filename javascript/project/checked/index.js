const subscribeBox = document.getElementById("subscribeBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const rupayBtn = document.getElementById("rupayBtn");
const subscribeMsg = document.getElementById("subscribeMsg");
const paymentMsg = document.getElementById("paymentMsg");
const submitBtn = document.getElementById("submitData");
submitBtn.onclick = function(){
    if(subscribeBox.checked){
        subscribeMsg.textContent = "You are subscribe !";
    }
    else subscribeMsg.textContent = "You are  not subscribe !";
    if(visaBtn.checked) paymentMsg.textContent = "You have choosen VISA card";
    else if(mastercardBtn.checked) paymentMsg.textContent = "You have choosen MasterCard";
    else if(rupayBtn.checked) paymentMsg.textContent = "You have choosen Rupay card";
    else paymentMsg.textContent = "No card selected";
    console.log("DONE");
    
}

