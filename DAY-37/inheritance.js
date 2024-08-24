class Animal{
    constructor(name){
        this.name=name
    }
    speak(){
        console.log(`I am ${this.name}`);
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }
    bark(){
        console.log(`I am ${this.name} and I am a ${this.breed}`);
    }
}
const dog1=new Dog('Alok','Pug');
dog1.bark(); //I am Alok and I am a Pug
dog1.speak(); //I am Alok