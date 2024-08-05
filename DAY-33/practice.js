// let date=new Date();
// const hour=date.getHours();
// let name="Alok";

// (hour<17)?((hour)<12?console.log("Good Morning " + name):console.log("Good Afternoon " + name)):console.log("Good Evening " + name);

const btnEl=document.querySelector("#btn");
const btnReset=document.querySelector("#reset");

localStorage.getItem("count" )?count=localStorage.getItem("count"):count=0; //if count is not present in local storage then it will be 0

btnEl.innerHTML="Clicked "+count+" times";
btnEl.addEventListener("click",()=>{
    count++;
    btnEl.innerHTML="Clicked "+count+" times";
    if(count%2===0){
        btnEl.style.backgroundColor="green";
    }
    else{
        btnEl.style.backgroundColor="red";
    }
    localStorage.setItem("count",count);
})

btnReset.addEventListener("click",()=>{
    count=0;
    btnEl.style.backgroundColor="white";
    btnEl.innerHTML="Click Me";
    localStorage.removeItem("count")
})