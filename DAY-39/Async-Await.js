// Async-Await in JavaScript
async function myFunction(){
    setTimeout(()=>{
        console.log("Hello World")
    },1000)
    
}
// myFunction()

async function fetchData(){
    let resonse=await fetch('https://api.github.com/users/alokofficial') //await keyword is only used in async function
    let data=await resonse.json()
    return data;
}

async function getData(){
    try{
        let response=await fetch('https://api.github.com/users/alokofficial')
        let data=await response.json();
        return data;
    }catch(err){
        console.log(err.message)
    }
}