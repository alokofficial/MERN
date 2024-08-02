//Create an array of numbers [5,6]. Add 4 at the beginning and 7 at the end of the array.

// const arr=[5,6];
// arr.unshift(4);
// arr.push(7);
// console.log(arr)

//Create a method to return an element at a particular position in the array.

// const arr=[5,6];
// console.log(arr[1])

//Create a method to remove the last element in the array.

// const arr=[5,6];
// arr.pop();
// console.log(arr)

//Create a method to remove the first element in the array.

// const arr=[5,6];
// arr.shift();
// console.log(arr)

//Create a method to return the length of the array.

// const arr=[5,6];
// console.log(arr.length)

//Create a method to sort the array in ascending order.

// const arr=[5,6];
// arr.sort();
// console.log(arr)

//Create a method to sort the array in descending order.

// const arr=[5,6];

// arr.sort((a,b)=>b-a);
// console.log(arr)

//Create a method to reverse the array.

// const arr=[5,6];

// arr.reverse();
// console.log(arr)

//Create a method to find the index of an element in the array.

// const arr=[5,6];

// console.log(arr.indexOf(5))

//Create a method to find the last index of an element in the array.

// const arr=[5,6];

// console.log(arr.lastIndexOf(5))

//Create a method to check if an element is present in the array or not.

// const arr=[5,6];

// console.log(arr.includes(5))

//Create a method to remove all the elements from the array.

// const arr=[5,6];

// arr.splice(0,arr.length);
// console.log(arr)

//Create a method to add an element at a particular position in the array.

// const arr=[5,6];

// arr.splice(1,0,7);
// console.log(arr)

//Create a method to remove an element at a particular position in the array.

// const arr=[5,6];

// arr.splice(1,1);
// console.log(arr)

//Create a method to replace an element at a particular position in the array.

// const arr=[5,6];

// arr.splice(1,1,7);
// console.log(arr)


//Create an array copy using slice method.

// const arr=[5,6];
// const arr1=arr.slice();
// console.log(arr1)

const arr=["I", "am", "happy", "today"];
const arr1=arr.reduce((accumulator, currentValue) => accumulator + " " + currentValue,"");
console.log(arr1)


