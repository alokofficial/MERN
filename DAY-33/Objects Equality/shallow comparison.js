function shallowEqual(obj1, obj2){
    if( typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null){
        return false;
    }
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }

    for(let key in obj1){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;   
}

const objA={a:1, b:2};
const objB={a:1, b:2};
const objC={a:1, b:3};
console.log(shallowEqual(objA, objB));
console.log(shallowEqual(objA, objC));

//for a shallow comparison, you can check if two objects have the same set of properties with identical values. This approach doesn't compare nested    