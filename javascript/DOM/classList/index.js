//classlist = element property in javascript used tp interact 
//with an element list of classes (css classes)
// allows you to make reusable classes for many elements
// across your webpage


//add()
//remove()
//toggle(remove if present,add if not)
//replace(oldClass,newClass)
//contains() // if present return true if not return false








const btns = document.querySelectorAll("button");
btns.forEach(button=>{
   button.addEventListener("mouseover",event =>{
    event.target.classList.toggle("enabled");
   })
})
btns.forEach(button=>{
    button.addEventListener("mouseout",event =>{
     event.target.classList.toggle("enabled");
    })
 })
 btns.forEach(button=>{
    button.addEventListener("click",event =>{
     event.target.classList.toggle("disabled");
    })
 })

