// inheritance helps to inherit properties and method to new class from existing class 
class animal{
     isAlive = true;
     eat(){
        console.log(`${this.name}, is eating `);
     }
     sleep(){
        console.log(`${this.name}, is sleeping `);
     }
}
class rabbit extends animal{
    name = "rabbit";
    run(){
        console.log(`${this.name},is running`);
    }
}
class fish extends animal{
    name = "fish";
    swim(){
        console.log(`${this.name},is swimming`);
    }
}
class hawk extends animal{
    name = "hawk";
    fly(){
        console.log(`${this.name},is flying`);
    }
}

let rabbit1 = new rabbit();
rabbit1.eat();
rabbit1.sleep();
rabbit1.run();
let fish1 = new fish();
fish1.eat();
fish1.sleep();
fish1.swim();
let hawk1 = new hawk();
hawk1.eat();
hawk1.sleep();
hawk1.fly();