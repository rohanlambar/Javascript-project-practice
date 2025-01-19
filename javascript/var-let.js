// let is block-scope , a variable with same name can be multiple declared within a function in different block

function test(){
    if(true){
        let x = 10;
        var y = 20;
        console.log("addition of x and y ",x+y);
    }
    // console.log("addition of x and y ",x+y);
    // due to let it wont work
    // hoisting work with var not with let
    // const var are not able to re assign
    // const arr or obj are able reassign value but not able to change refrence to other arr or obj

}

test();