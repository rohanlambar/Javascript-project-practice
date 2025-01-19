// nested Objects are objects inside objects 
// this use to describe more complex datastructure
//child object inside parent object 
// eg. person{address{},contactInfo{}};
// eg.shoppingCart{mouse{},keyBoard{},Monitor{}};

const person = {
    fullName : " nobita nobi  ",
    isStudent : true,
     address : {
          province :"shibuya",
          city:"tokyo",
          country:"japan",
    }
}

console.log(person.fullName);
console.log(person.address.country);


class user {
    constructor(name,age,...address){
            this.name = name;
            this.age = age;
            this.address = new Address(...address)
    }
}

class Address{
    constructor(province,country){
        this.province = province;
        this.country = country;
    }

}

let user1 = new user("spongeBob",30,"bikini bottom","Int.waters");
console.log(user1.address.province);