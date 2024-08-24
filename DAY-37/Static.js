class MathUtils{
    static add(a,b){
        return a+b;
    }
}
console.log(MathUtils.add(4,5))

//static method are defined on the class itself, rather that on instance of the class
//called using the class name directly