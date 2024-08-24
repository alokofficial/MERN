//try-catch statements
const json = '{ "name": "Alok" "age: "30" }';
try{
    const data=JSON.parse(json);
    console.log(data);
}
catch(err){
    console.log(err.message);
}

const error=new Error('Something went wrong'); //creating error object using Error constructor
console.log(error.name) //getting error name
console.log(error.message) //getting error message

function divide(a,b){
    if(b===0){
        throw new Error('Divide by zero error');
    }
    return a/b
}
try{
    console.log(divide(10,0o10))
}
catch(err){
    // console.log(err.name)   
    console.log(err.message)
}
finally{
    console.log('Finally block:always execute')
}