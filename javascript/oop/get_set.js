// setter = it is special method use to make property Readable
// getter = it is a special method used to make property writeble

class rectangle {
    constructor(width,length)
    {
        this.width = width;
        this.length = length;
    }
    set width(newWidth){
        if(newWidth >= 0){
             this._width = newWidth;
        }
        else console.error("width should be positive number");
    }
    set length(newLength){
        if(newLength >= 0){
             this._length = newLength;
        }
        else console.error("length should be positive number");
    }
    get length(){
        return this._length;
    }
    get width(){
        return this._width;
    }
    get area(){
        return this._length * this._width;
    }
}

let rect = new rectangle(1,23);
console.log(rect.width);
console.log(rect.length);
console.log(rect.area);


class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName){
        if(typeof newFirstName === 'string' && newFirstName.length >0){
          this._firstName = newFirstName;
        }
        else console.error("FirstName should be nonzero length string");
    }
    set lastName(newLastName){
        if(typeof newLastName === 'string' && newLastName.length >0){
            this._lastName = newLastName;
          }
          else console.error("LastName should be nonzero length string");
    }

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get fullName(){
        return this._firstName + " "+ this._lastName;
    }
}

let person1 = new Person("spongeBob","squarePants",23);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);
console.log(person1.age)


