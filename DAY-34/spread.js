// array expansion
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];
console.log(arr2);

//object expansion
const obj = { a: 1, b: 2 };
const obj2 = { ...obj, c: 3 };
console.log(obj2)

//function expansion
function sum(...args){ {
    return args.reduce((a, b) => a + b, 0);
}
}
const number=[1,2,3,4,5,6,7,8,9,10];
console.log(sum(...number))