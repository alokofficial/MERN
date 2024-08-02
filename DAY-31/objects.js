//Create object to represent a product from Myntra.

// let product={
//     id:1,
//     name:"Shirt",
//     price:1000
// }

// console.log(product)

//Create an Object with two references and log changes to one object by changing the other one.

// let product={
//     id:1,
//     name:"Shirt",
//     price:1000
// }

// let product2=product
// product2.price=2000

// console.log(product)

//Use bracket notation to display name.

// let product={
//     id:1,
//     name:"Shirt",
//     price:1000
// }

// console.log(product["name"])


// Given an object {message: 'good job', status: 'complete'}, use de-structuring to create two variables message and status.

// let obj={
//     message:"good job",
//     status:"complete"
// }

// let {message:msg,status:stat}=obj;

// console.log(msg,"\n",stat)

//Add function isIdenticalProduct to compare two product objects.

let obj1={
    id:1,
    name:"Shirt",
    price:1000
}

let obj2={
    id:1,
    name:"Shirt",
    price:1000
}

function isIdenticalProduct(obj1,obj2){
    if(obj1.id===obj2.id && obj1.name===obj2.name && obj1.price===obj2.price){
        return true
    }
    else{
        return false
    }
}
console.log(isIdenticalProduct(obj1,obj2))