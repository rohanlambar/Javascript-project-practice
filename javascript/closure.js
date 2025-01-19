// closure are function inside a function 
// it has variable and scope of outer function 
// used for state maintanence and to keep data access private

function outer(){
    let message = "hello";
    function inner(){
        console.log(message);
    }
    inner();
}
outer();

// example 2 
function counter(){
    let count = 0 ;
    function increaseCounter(){
        count+=1;
        console.log(`"value of counter is ${count}"`);
    }
    function decreaseCounter(){
        count-=1;
        console.log(`"value of counter is ${count}"`);
    }
    function getCount(){
        console.log(`value of count is ${count}`);
    }
    return {increaseCounter,decreaseCounter,getCount};
}

let count1 = counter();
count1.increaseCounter();
count1.increaseCounter();
count1.decreaseCounter();
count1.getCount();



// example 2 


function score(){
    let health = 0;
    function increaseHealth(value){
        health += value;
        console.log(`health increase by ${health}`);
    }
    function decreaseHealth(value){
        health -= value;
        console.log(`health decrease by ${health}`);
    }
    function getHealth(value){
    console.log(`now health is ${health}`);
    }
    return {increaseHealth,decreaseHealth,getHealth}
}


let player1 = new score();
player1.increaseHealth(12);
player1.increaseHealth(34);
player1.decreaseHealth(23);
player1.getHealth();
