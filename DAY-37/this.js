// use of this in different environment

console.log(this)  // {} in node environment and in browser it is window object

//object Method: when a function is called as a method of an object, this refers to the object the method is called on
//object method
const person={
    name:"Alok",
    age:22,
    about:function(){ //object method
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }
}

person.about()


// constructor function
//when a function is used as a constructor with new, this refers to the newly created instance of the function

function Person(name){
    this.name=name;

}
const p1=new Person('alok')
console.log(p1.name)

//Event Handler
//In an event handler, this refers to the element that received the event

// const btn=document.getElementById('btn')
// btn.addEventListener('click',function(){
//     console.log(this.id)
// })

//Arrow Function
//In an arrow function, this refers to the enclosing lexical scope
const obj={
    name:"Alok",
    age:22,
    about:()=>{ //arrow function
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }
}

obj.about() // undefined
//Arrow function does not have its own this, they use the this of their parent function

