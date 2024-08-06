function deepEqual(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }   

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    for (let key in obj1) {
        if (!deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }   
    return true;
}

const objD={a:1, b:{c:1, d:2}};
const objE={a:1, b:{c:1, d:2}};
const objF={a:1, b:{c:2, d:5}};
console.log(deepEqual(objD, objE))
console.log(deepEqual(objD, objF))
