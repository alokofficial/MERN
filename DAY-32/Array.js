// const fruits=['apple','mango','banana'];
// fruits.push("grapes");
// fruits.unshift("orange");
// fruits.pop();
// fruits.shift();
// console.log(fruits);
// console.log("using while loop:")
// let i=0;
// while(i<fruits.length){
//     console.log(fruits[i]);
//     i++;
// }
// console.log("using for loop:")
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }
// console.log("using for of loop:")
// for(let fruit of fruits){
//     console.log(fruit);
// }

// const numbers =[1,2,3,4,5];

// const firstGreaterThanThree = numbers.find(number => number > 3);
// console.log(firstGreaterThanThree);

// const index=numbers.indexOf(3);
// console.log(index)

//forEach loop on array

// const fruits=['apple','mango','banana'];
// fruits.forEach((fruit)=>{
//     console.log(fruit);
// })

// filter method

// const numbers =[1,2,3,4,5,6,7,8,9,10];
// const evenNumbers = numbers.filter(number => number % 2 === 0); //return an array
// console.log(evenNumbers)

// map method

// const numbers =[1,2,3,4,5,6,7,8,9,10];
// const doubledNumbers = numbers.map(number => number * 2); //return an array
// console.log(doubledNumbers)

// reduce method

const numbers =[1,2,3,4,5,6,7,8,9,10];
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum)