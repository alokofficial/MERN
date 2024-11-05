// debug and fix syntax, runtime and logical errors

function calculateArea(width, height) {
    // return width + height; //logic error
    return width * height;
}

// let width = 10 height = 5; //syntax error
let width = 10; let height = 5;

// if (area > 100){ //runtime error

if(calculateArea(width, height) > 100){
    console.log('The area is large.');
    
}else{
    console.log("The area is small.");
    
}

// if(width + height > 100){ //logical error

if(width + height >= 100){
    

    console.log('Area is greater than or equal to 100');
    
}