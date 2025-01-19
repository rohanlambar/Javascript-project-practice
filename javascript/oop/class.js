// class provide more structured way than traditional constructor method
class product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $ ${this.price}`);
     

    }
    displayTotol(salesTax){
        let total = this.price + (this.price*salesTax);
        console.log(`Total price after taxes $ ${total}`);
    }
}
let product1 = new product("underwear",100);
product1.displayProduct();
product1.displayTotol(0.05);