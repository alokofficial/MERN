const person={
    name: "Alok",
    age: 22,
    city: "Kolkata",
    skill:["HTML","CSS","JS","Python","Java","React","Node.js"],
};

//convert the object into JSON and store in local storage
const personJson=JSON.stringify(person);
localStorage.setItem('person',personJson)

// console.log(personJson)

//convert the JSON data into javascript object from local storage

// const personObject=JSON.parse(personJson);

console.log(JSON.parse(localStorage.getItem('person')));