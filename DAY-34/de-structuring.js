
let product = {
    name: "Shirt",
    category: "Clothing",
    price: 2000
}
let {name, category, price} = product; //destructuring with object
let ctg=product.category; //destructuring with variable
console.log(`Product Name: \t${name}\nCategory: \t${category}\nPrice: \t${price}\n`)
console.log(ctg)

//property shorthand

let price1=234;
let product1={
    company:"Mango",
    price1
}    

console.log(product1)

//method shorthand
let product2={
    name: "Shirt",
    category: "Clothing",
    price: 4000,
    display(){ //method shorthand same as function()
        console.log(`Product Name: \t${this.name}\nCategory: \t${this.category}\nPrice: \t${this.price}\n`)
    }
}   

product2.display()
