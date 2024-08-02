// alert("Welcome To My Website");
const btn1El=document.getElementsByClassName('btn1')[0];
const btn2El=document.getElementById('btn2')
btn1El.onclick=function(){
    console.log("Add to Bag")
} 
btn2El.onclick=function(){
    console.log("❤️ Wishlist")
}
const A=btn1El.style;
A.backgroundColor='#93ec92';
A.padding='5px 15px';
A.border='none';
A.borderRadius='10px';

const B=btn2El.style;
B.color='black';
B.padding='5px 35px';
B.border='2px solid black';
B.borderRadius='10px';
B.textTransform='uppercase';