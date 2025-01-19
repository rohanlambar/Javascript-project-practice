/* default arguments
   function function_name(argument1 = default_para1 ,...........){
   statment
   }

*/

function add(x = 10,y=getNum()){
    return x+y
}

function getNum(){return 6;}
console.log(add(19,23))
console.log(add(19))
console.log(add())

//default parameter are called optional parameter is their not necessary so if function defination contain few optional argument so place them last in function declaration
