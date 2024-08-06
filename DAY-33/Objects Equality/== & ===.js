const obj1 = {a:1, b:2};
const obj2 = {a:1, b:2};
const obj3=obj1;
console.log(obj1 == obj3);// same instance
console.log(obj1 === obj3); // same instance
console.log(obj1 == obj2);// different instance
console.log(obj1 === obj2); // different instance



