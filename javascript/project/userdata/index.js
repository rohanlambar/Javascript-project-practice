// taking data from uses
let username 
document.getElementById("submit_data").onclick = function(){
    username = document.getElementById("data").value
    document.getElementById("header").textContent = `hello,${username}`
}