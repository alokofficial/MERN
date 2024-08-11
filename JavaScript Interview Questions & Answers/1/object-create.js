// 1. Object literal syntax:
let obj={
    name:"Alok",
    age:24
}

// 2. Object constructor:
let obj1=new Object();
obj1.name="Alok";
obj1.age=24;
// not recommended way of creating an object

// 3. Object.create():
let obj2=Object.create(obj); // create an object with obj as prototype
obj2.name="Alok";
obj2.age=24;
obj2.city="Bangalore";

let vehicle = {
    wheels: '4',
    fuelType: 'Gasoline',
    color: 'Green'
  }
  let carProps = {
    type: {
      value: 'Volkswagen'
    },
    model: {
      value: 'Golf'
    }
  }
  
  var car = Object.create(vehicle, carProps);
  console.log(car);

  // 4. function constructor
  function Car(name, year) {
    this.name = name;
    this.year = year;
  }
  
  let car1 = new Car("Ford", 2010);
  console.log(car1);
// 5. function constructor with prototype
function Car(name, year) {
    this.name = name;
    this.year = year;
  }
  Car.prototype.age = function() {
    return new Date().getFullYear() - this.year;
}

  let car2 = new Car("Ford", 2010);
  console.log(car2.age());


  // 6. Object.assign()
  let obj3 = Object.assign({}, obj, obj2);
  console.log(obj3)

  // 7. ES6 class
  class Car1 {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      return new Date().getFullYear() - this.year;
    }
  }

  let car3 = new Car1("Ford", 2010);
  console.log(car3.age())

  //8. Singleton pattern

  