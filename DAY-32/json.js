const person={
    name: "Alok",
    age: 22,
    city: "Kolkata",
    skill:["HTML","CSS","JS","Python","Java","React","Node.js"],
};

//convert the object into JSON
const personJson=JSON.stringify(person);

console.log(personJson)

//convert the JSON data into javascript object;

const personObject=JSON.parse(personJson);
console.log(personObject);