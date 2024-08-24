class Validator extends Error{
    constructor(message){
        super(message)
        this.name='ValidationErorrrr'
    }
}
function validate(input){
    if(!input){
        throw new Validator("Input is required")
    }
}

try{
    validate('');

}catch(err){
    if(err instanceof Validator){
        console.log('Error Name:- ',err.name)
        console.log('Validator Error:- ', err.message);
        
    }
}