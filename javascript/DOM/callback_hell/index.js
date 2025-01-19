// callback hell = callback hell is situation in js when callback are nested inside c
//callback which make code unreadable
// async code can be handled by using promise ,async and wait

function task1(callback){
    setTimeout(()=>{
        console.log("task 1 completed")
        callback();
    },3000);
}
function task2(callback){
    setTimeout(()=>{
        console.log("task 2 completed")
        callback();
    },2000);
}
function task3(callback){
    setTimeout(()=>{
        console.log("task 3 completed")
        callback();
    },1000);
}
function task4(callback){
    setTimeout(()=>{
        console.log("task 4 completed")
        callback();
    },1500);
}
function task5(callback){
    setTimeout(()=>{
        console.log("task 5 completed")
        callback();
    },500);
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    console.log("all task completed");
                })
            })
        })
    })
});

