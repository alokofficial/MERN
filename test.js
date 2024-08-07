// define a callback function with normal argument
function myCallBack(greet){
    console.log(greet + " how are you!")
}

// define a higher order function with callback function as argument
function myHOFunction(callback){
    let initial="Hi";
    callback(initial) //call the callback function with argument
}
//call the hofunction with callback as callback as argument
myHOFunction(myCallBack);