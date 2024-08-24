// functonal constructor

function Person(name,age){
    this.name=name;
    this.age=age;
}
function show(){
    console.log(`${this.name} and age is ${this.age}`)
}
const p1=new Person("alok",25);
p1.show=show; //function binding
p1.show();//function call

const p2=new Person("kumar",26); //object
p2.show=show; //function binding
p2.show(); //function call
