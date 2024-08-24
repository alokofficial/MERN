function step1(){
    return promise=new Promise((resolve, reject)=>{ // creating using Promise constructor and passing callback function which takes two arguments i.e. resolve and reject
        setTimeout(() => {
            console.log("step 1");
            resolve();
        }, 1000);
    })
}
function step2(){
    return promise=new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("step 2");
            resolve();
        }, 1000);
    })
}
function step3(){
    return promise=new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("step 3");
            resolve();
        }, 1000);
    })
}
step1().then(()=>step2()).then(()=>step3()).then(()=>console.log("done")) //callback hell but with promises
