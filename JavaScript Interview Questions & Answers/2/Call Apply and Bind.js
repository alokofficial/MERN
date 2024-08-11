//call, apply and bind

//call

let obj = {
    a: 10,
    b: 20
}   

let obj2 = {    
    a: 30,
    b: 40
}

function sum(x, y) {
    return this.a + this.b + x + y // 10+20+100+200;
}

console.log(sum.call(obj, 100, 200)) // 330;
console.log(sum.call(obj2, 100, 200)) // 370;


//apply

console.log(sum.apply(obj, [100, 200])) // 330;
console.log(sum.apply(obj2, [100, 200])) // 370;

//bind

let obj3 = sum.bind(obj, 100, 200);
console.log(obj3());
