function User(name, age, email, isAdmin){
    this.name=name;
    this.age=age;
    this.email=email;
    this.isAdmin=isAdmin;
}

User.prototype.greet=function(){ //injecting function in Use constructor.
    console.log(`Hello ${this.name} from ${this.email} your age is ${this.age} and you are ${this.isAdmin}`); 
}

User.prototype.makeUserInput=function(){
    this.isAdmin=true;
}
const user1=new User('Alok', 25, 'a@a.com', false);
user1.makeUserInput();
user1.greet()