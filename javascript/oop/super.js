//super == keyword is use to call constructor of parent class or to access properties or method of parent 
//class


class animal{
    isAlive = true;
    constructor(name,age){
        this.name = name;
        this.age = age;

    }
    eat(){
       console.log(`${this.name}, is eating `);
    }
    sleep(){
       console.log(`${this.name}, is sleeping `);
    }
    move(speed){
        console.log(`this animal move at speed of ${speed} kmph`);
    }
}
class rabbit extends animal{
   constructor(name,age,runSpeed){
    super(name,age);
    this.runSpeed = runSpeed;
   }
   run(){
       console.log(`${this.name},is running`);
       super.move(this.runSpeed)
   }
}
class fish extends animal{
   constructor(name,age,swimSpeed){
            super(name,age);
            this.swimSpeed = swimSpeed;
   }
   swim(){
       console.log(`${this.name},is swimming`);
       super.move(this.swimSpeed);
   }
}
class hawk extends animal{
   constructor(name,age,flySpeed){
    super(name,age);
    this.flySpeed = flySpeed;

   }
   fly(){
       console.log(`${this.name},is flying`);
       super.move(this.flySpeed);
   }
}

let rabbit1 = new rabbit("Rabbit",1,25);
rabbit1.eat();
rabbit1.sleep();
rabbit1.run();
let fish1 = new fish("Fish",2,34);
fish1.eat();
fish1.sleep();
fish1.swim();
let hawk1 = new hawk("Hawk",2,50);
hawk1.eat();
hawk1.sleep();
hawk1.fly();