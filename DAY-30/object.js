// let product={
//     company:"Mango",
//     item_name: "cotton saree",
//     price: 1000,
//     quantity: 5,
//     total: 5000,
// };
// // console.log(product.price) //dot notation
// console.log(product["price"]) //bracket notation

// console.log(product.total)
// delete product.total;
// console.log(product.total)


let product={
    companay:"Mango",
    item_name: "cotton saree",
    price: 1000,
    quantity: 5,
    total: 5000,
    rating:{
        star:4.5,
        count:100,
    },
    display:function(){
        console.log(this.price)
    },
}

product.display()