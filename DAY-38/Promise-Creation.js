// A promise is an object representing the eventual completion or failure of an asynchronous operation.
// Haves three states: pending, fulfilled, and rejected.


// Creation of Promise
let promise =new Promise((resolve, reject)=>{ // creating using Promise constructor and passing callback function which takes two arguments i.e. resolve and reject
    //Asynchronous operation
    let a=false;
    if(a){
        resolve('Success');
    }else{
        reject('Failed');
    }
}).then(()=>{   //if resolved
    console.log('Promise resolved');
}).catch(()=>{  //if rejected
    console.log('Promise rejected');
}).finally(()=>{    //always execute
    console.log('This is finally block');
})