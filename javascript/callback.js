// callback = function passed as argument to other function

function sum(callback,x,y){
    let result = x+y;
    callback(result);
}
function display(result){
    console.log(result);
}

sum(display,1,4);
            