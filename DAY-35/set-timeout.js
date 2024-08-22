// setTimeout method is used to set a timer
// setTimeout method takes two arguments
// 1st argument is callback function
// 2nd argument is time in milliseconds
// 3rd argument and onward are optional if callback function has arguments

// setTimeout(callback function,time)

const setID=setTimeout(()=>{
    console.log('hello');
},1000)
// clearTimeout(setID)  // to clear the timer

function greet(name,age){
    console.log(`Hello ${name} your age is ${age}`);
}
setTimeout(greet,1000,'Alok',22)