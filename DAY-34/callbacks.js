// define a callback function
function myCallbackFunction(greet) {
    console.log(greet + 'Callback function is called');
}
// define a function that takes a callback function as an argument "higher order function"
function myFunction(callback){
    let initial="Hello, ";
    callback(initial) // call the callback function
}
// call the higher order function with a callback function as an argument
myFunction(myCallbackFunction)