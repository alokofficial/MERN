// Ternary Operator: "ondition ? true : false"

//Guard operator: "value||default value"

// Default operator : "value??fallbackValue"   //falsy value is null or undefined only.

//Ternary oprator:
let age=20;
let canVote =(age>=18)?"Yes":"No";
console.log(canVote)

//Guard operator:

// let userName='Alok';
let userName='';
let defaultUserName='Guest';
let displayName=userName || defaultUserName;
console.log(displayName) //Guest

//Default operator:
let userAge = null;
let defaultAge = 18;
let displayAge = userAge ?? defaultAge;
console.log(displayAge) //18    