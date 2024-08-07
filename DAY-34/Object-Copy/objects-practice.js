// Add function isIdenticalProduct to compare two product objects.
function isIdenticalProduct(product1, product2) {
    return (
        product1.name === product2.name &&
        product1.category === product2.category &&
        product1.price === product2.price
    );
}

// Add function deepEqual to compare two product objects.
function deepEqual(product1, product2) {
    return JSON.stringify(product1) === JSON.stringify(product2);
}   

const product1 = {
    name: "Shirt",
    category: "Clothing",
    price: function () {
        return 1000;
    }
};
const product2 = {
    name: "Shirt",
    category: "Clothing",
    price: function () {
        return 1000;
    }
};

console.log(deepEqual(product1, product2));
console.log(isIdenticalProduct(product1, product2))

const product3 = {
    name: "Shirt",
    category: "Clothing",
    price: function () {
        return 1000;
    }
};

console.log(deepEqual(product1, product3));
console.log(isIdenticalProduct(product1, product3))

//create an object with nested objects. write a function that perfomes a shallow copy of the object. Modify a property in the nested object of the copy and observe its effect on the original object.
function swallowCopy(obj){
    return {...obj}
}
function deepCopy(obj){
    return JSON.parse(JSON.stringify(obj))
}

const original={a:1, b:{c:4}};
const copyS=swallowCopy(original);
const copyD=deepCopy(original);
copyS.b.c=2;
copyD.b.c=3;
console.log(original)
console.log(copyS)
console.log(copyD)

//write a function that merge two objects. If the Same property exists in both objects, use the value from the second object. Test this function with objects that have both overlapping and unique properties.

function merge(obj1, obj2){
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null){
        return obj2
    }

    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return {...obj1, ...obj2} 
    }
    for(let key in obj1){
        if(obj1.hasOwnProperty(key)){
            if(typeof obj1[key] === 'object' && typeof obj2[key] === 'object'){
                obj1[key]=merge(obj1[key], obj2[key])
            }
            else if(obj2.hasOwnProperty(key)){
                obj1[key]=obj2[key]
            }
        }
    }
    return obj2
}
const obj1 = {
    name: "Shirt",
    category: "Clothing",
    price: 1000,
};

const obj2 = {
    name: "Shirt",
    category: "Clothing",
    price: 1000,
};

console.log(merge(obj1, obj2))