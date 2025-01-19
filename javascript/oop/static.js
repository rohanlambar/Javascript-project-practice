// static : any property or method declared as static belong to class not the object
class mathUtil{
    static Pi = 3.14159;
    static getDiameter(radius){
       return radius * 2; 
    }
    static getCircumference(radius){
        return 2*this.Pi*radius;
    }
    static getArea(radius){
        return this.Pi*radius*radius;
    }
}
let math1 =new mathUtil();
console.log(mathUtil.Pi)
console.log(mathUtil.getDiameter(10));
console.log(mathUtil.getCircumference(10));

console.log(mathUtil.getArea(10));


class User{
    static userNo = 0;
    constructor(username){
            this.username = username;
            User.userNo++;
    }
   
    static onlineUser(){
        console.log(`Online user: ${this.userNo}`)
    }
    getUsername(){
        console.log(`hello,username ${this.username}`)
    }
}

let user1 = new User('spongeBob');
let user2 = new User('Mr.krappy');
user1.getUsername();
user2.getUsername();

User.onlineUser();


