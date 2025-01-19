// promise = a object in javascript use to handle async code in javascript 
// wrap a promise object around asynchronous code
// pending => resolved or rejected
// new Promise((resolve,reject)=>{
    //asynchronous code})

// complete for task
//task1
//task2
//task3

function task1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const t1 = true
           if(t1)resolve("task1 completed");
           else reject("you didn't ");
    
        },3000);
    })
    
}
function task2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const t2 = false
            if(t2) resolve("task2 completed");
            else reject(" you didn't do the task2 ")
        },5000);
    })
}
function task3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("task3 completed");
    
        },2000);
    })
}

// task1().then(value => {console.log(value) ; return task2()})
//        .then(value => {console.log(value); return task3()})
//        .then(value => {console.log(value); console.log("all task completed ")})
//        .catch((err)=> console.log("errr",err));
       



// Async / Await = Async = makes a function return a promise 
//               => 

async function callTask(){
    try{
  const task1result = await task1();
  console.log(task1result);
  const task2result = await task2();
  console.log(task2result);
  const task3result = await task3();
  console.log(task3result);
  console.log('completed all code');
}catch(err){
    console.log("error",err)

  }
}
callTask();
