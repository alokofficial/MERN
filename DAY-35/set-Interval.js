// setInterval is used to call a function repeatedly after a certain interval of time.
// setInterval takes two arguments
// 1st argument is callback function
// 2nd argument is time in milliseconds
// 3rd argument and onward are optional if callback function has arguments

// setInterval(callback function,time)

function greet(name,age){
    console.log(`Hello ${name} your age is ${age}`);
}
const setIntID = setInterval(greet, 1000, 'Alok', 22)
setTimeout(()=>{
    clearInterval(setIntID);
    console.log(`Stopped printing at interval ${setIntID}`)
},5000)

// setTimeout(clearInterval, 5000, setIntID)//to clear the timer