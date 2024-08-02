function trySwap(obj){
    let temp=obj.a;
    obj.a=obj.b;
    obj.b=temp;
    console.log(`a = ${obj.a}, b = ${obj.b}`); // after swapping
}
function main(){
    let obj={a:10,b:20};
    console.log(`a = ${obj.a}, b = ${obj.b}`); // before swapping
    trySwap(obj);
    console.log(`a = ${obj.a}, b = ${obj.b}`); // after swapping
}
main()