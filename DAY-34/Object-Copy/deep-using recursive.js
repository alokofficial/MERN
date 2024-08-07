// deep copy using recursive
function deepCopy(obj){
    if(obj===null || typeof obj!=='object'){
        return obj;
    }
    const copy={};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){ //only copy own properties
            copy[key]=deepCopy(obj[key]); //recursion
        }
    }
    return copy;
}




const original={a:1, b:{c:3}};
const deepCopyObj=deepCopy(original);
deepCopyObj.a=2;
console.log(original)
console.log(deepCopyObj)