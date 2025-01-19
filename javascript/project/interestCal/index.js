 function calculate(){
    
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");
    const dataDisplay = document.getElementById("total-amount");
    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value/100);
    let years = Number(yearsInput.value);
   
    if(principal < 0 ){
        principal = 0;
        principalInput.textContent = 0;
    }
    else  if(rate < 0){
        rate = 0;
        rateInput.textContent = 0;
    }
    else  if(years < 0 ){
        years = 0;
        yearsInput.textContent = 0;
    }
    let result = principal * Math.pow((1 + rate/1),1*years);
   
    dataDisplay.textContent = result.toLocaleString(undefined,{style:"currency",currency:"INR"});
  
}