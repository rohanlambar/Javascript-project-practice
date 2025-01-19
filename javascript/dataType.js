// javascript has 7 primitive datatypes 
// number,string,boolean,undefined,null,symbol,bigint
// number
var num = 123.89;
console.log(num);
// string 
var str = "hello ";// string can be declared with single,double quotation and backticks
console.log(str);
//boolean 
var bool = true;
console.log(bool);
// undefined
var val = undefined
console.log(val);
// null
var name = null;
console.log(name);
//symbol create unique immutable values
var sym1 = Symbol('123');
var sym2 = Symbol('123');
let res = sym1 == sym2;
console.log('value of res',res);
// bigint store large number with n at its end
var int = 12344556677899997655n;
console.log(int);
// non primitive 
// array
var arr = [12,23,34]
console.log(arr);
var obj = {
    anime : "5 centimeter per second",
    type : "movie",
    director:"maKoto shikai"
}

console.log(JSON.stringify(obj));
console.log(obj['anime'])
var date = new Date();
console.log("todays date"+date);
console.log(typeof date);