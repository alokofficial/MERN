//What is the currying function in JavaScript?
//Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, an n-ary function turns into a unary{take single argument} function.


function add(x, y) {    
    return x + y;
}

// const curriedAdd = (x) => (y) => (z) => x + y + z;
function curriedAdd(x) {
    return function (y) {
        return function(z){
            return x + y + z;
        }
    }
}

console.log(curriedAdd(10)(20)(30));
