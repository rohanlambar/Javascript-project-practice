const Data = document.getElementById("data");
const isfahrenheit = document.getElementById("fahreheit");
const isCelsius = document.getElementById("celsius");
const solution = document.getElementById("solution");
const submit = document.getElementById("submitData");
let temp;
submit.onclick = function convert(){
if(isCelsius.checked){
        temp = Number(Data.value);
        let ans = (temp-32)*(5/9);
        solution.textContent = ans.toFixed(1) + "°C";
        
    }
    else if(isfahrenheit.checked){
           temp = Number(Data.value)
           let ans  = temp*(9/5)+32;
           solution.textContent = ans.toFixed(1) + "°F"
           
    }
    else{
        solution.textContent ="Select the above option";
    }
console.log("he")
}