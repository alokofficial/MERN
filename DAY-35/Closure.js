// Lexical scope: where a variable is accessible within its scope, even when outside the scope.
// Closure: inner function has access to outer function variables even after outer function has returned.
const greet = (name) => {
    name=name||'Guest';
    function sayHello(){
        console.log(`Hello ${name}`);
    }
    return sayHello;
}

const hello=greet("Ramu");
hello() // the inner function retains access to these variables even after the outer function has finished executing.

// Closures are used in React, Redux, and other frameworks that use callbacks.
// Closures are used to create an inner function that has access to the outer function's variables.
// Closures are used in maintaining state.

function makeCounter(){
    let count=0;
    return function (){
        count++;
        return count;
    }
}
const counter=makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());