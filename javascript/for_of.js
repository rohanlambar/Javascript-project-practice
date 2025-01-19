let arr = [1,2,34,45,34]
for(el of arr)
    console.log(el)
const mpp = new Map()
mpp.set("one",1);
mpp.set("two",2);
mpp.set("three",3);
for(let[k,v] of mpp)
    console.log(k+"->"+v);