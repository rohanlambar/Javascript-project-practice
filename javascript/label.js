outerloop:
for(let i = 0 ;i<5;i++){
    console.log("outerloop"+i);
    innerloop:
    for(let j = 0 ;j<5;j++){
        console.log("innerloop"+j);
        if(j==2) continue outerloop;
    }
}