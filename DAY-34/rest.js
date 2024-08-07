//functional parameters
function sum(...args){
    let total=0;
    for(let arg of args){
        total+=arg
    }
    return total
}

console.log(sum(1,2,3,4,5,6,7,8,9,10))

//array destructuring
let arr=[1,2,3,4,5,6,7,8,9,10]
let [a,b,...rest]=arr
console.log(rest)

//object destructuring
let obj={a:1,b:2,c:3,d:4,e:5,f:6}
// let {...rest1,e,f}=obj // rest object must be last
let {e,f,...rest1}=obj
console.log(rest1)