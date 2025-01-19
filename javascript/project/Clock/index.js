function updateClock(){

let now = new Date();
let hours = now.getHours();
let meridian = hours >=12 ? "PM":"AM";
hours = hours%12 || 12;
hours = hours.toString().padStart(2,0);
let minutes  =now.getMinutes().toString().padStart(2,0);
let seconds = now.getSeconds().toString().padStart(2,0);
let timeString = `${hours}:${minutes}:${seconds} ${meridian}`;
document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock,1000);