// array expansion
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];
console.log(arr2);

//object expansion
const obj = { a: 1, b: 2 };
const obj2 = { ...obj, c: 3 };
console.log(obj2)

//function expansion
function sum(a,b,c){ {
    return a+b+c;
}
}
const number=[1,2,3];
console.log(sum(...number))