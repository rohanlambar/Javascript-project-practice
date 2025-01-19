// objects collection of related properties or methods


const person1 = {
    firstName:"Sponge-Bob",
    lastName :"Square-Pant",
    isEmployee :true,
    hello :function() {console.log(`hello,${this.firstName}`)}
}
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.isEmployee);
person1.hello();