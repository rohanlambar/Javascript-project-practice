// constructor is a method use to define a object to properties and method
function car(make,model,year,mileage){
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.drive = function(){console.log(`you drive a ${this.model}`)};
}
const car1 = new car("ford","mustang",2024,45);
car1.drive();