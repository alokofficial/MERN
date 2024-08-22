const sum = function(a,b){
    return a+b;
}

const sum1 = (a,b)=>{ //arrow function
    return a+b;
}   

const sum2=(a,b)=>(a+b); //arrow function with one line can be written as return in parentesis
const sum3=(a,b)=>a+b; //arrow function with one line and no parenthesis for single return

const square=num=>num*2;    // arrow function with one line and no parenthesis for single parameter

const num=[1,2,3,4,5,6,7,8,9,10];
function double(num){
    return num*2    //normal function
}
const double1=num.map(double); //normal function
const double2=num.map(num=>num*2);//arrow function as a callback no need to pass reference of any function
console.log(double2);
