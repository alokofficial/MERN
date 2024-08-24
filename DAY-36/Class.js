// Classes in JavaScript are a template for creating objects. they encapsulate data with code to work on the data
class User{
    constructor(name,email,age,isAdmin){
        this.name=name;
        this.email=email;
        this.age=age;
        this.isAdmin=isAdmin;
        
    this.makeUserAdmin=function(){
        this.isAdmin=true;
    }

}
}
const user1=new User("Alok","R9t0v@example.com",20,false);
user1.makeUserAdmin();
console.log(`${user1.name} ${user1.email} ${user1.age} ${user1.isAdmin}`);

// class Animal{
//     constructor(name){
//         this.name=name;
//     }

//     speak(){
//         console.log(`I am ${this.name}`);
//     }
// }

// const a=new Animal("Alok");
// a.speak();