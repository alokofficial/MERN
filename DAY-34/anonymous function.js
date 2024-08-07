//1. anonymous function are functions without a name.
//2. they are often used as assigned to a variable.
//3. useful for creating function scopes and avoiding global variables.

//syntax
(function(){
    //function body
});

//example as a callback

setTimeout(function(){
    console.log("this is anonymous function")
}
,1000);

//Assigned to a variable
const add = function(a,b){
    return a+b;
};
console.log(add(2,3));
