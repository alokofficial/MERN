// reverse the digit of a number
// let num=12345
// let rev=0
// while(num>0){
//     let rem=num%10
//     rev=rev*10+rem
//     // num=Math.floor(num/10)
//     num=parseInt(num/10)
// }
// console.log(rev)

//fibbonacci series
// let n=10
// let a=0
// let b=1
// let c
// for(let i=1;i<=n;i++){
//     console.log(a)
//     c=a+b
//     a=b
//     b=c
// }

//Armstrong number
// let num=153
// let temp=num
// let sum=0
// let rem
// while(temp>0){
//     rem=temp%10
//     sum=sum+rem**3
//     temp=parseInt(temp/10)
// }
// if(sum==num){
//     console.log("Armstrong")
// }else{
//     console.log("Not Armstrong")
// }

//palindrome number
// let num=121
// let temp=num
// let rev=0
// while(num>0){
//     let rem=num%10
//     rev=rev*10+rem
//     num=parseInt(num/10)
// }
// if(rev==temp){
//     console.log("palindrome")
// }else{
//     console.log("Not palindrome")
// }

//multiplication table for a number
// let num=19
// for(let i=1;i<=10;i++){
//     console.log(`${num}x${i}=${num*i}`)
// }

//prime or not
// let num=13   
// let flag=false
// for(let i=2;i<num;i++){
//     if(num%i==0){
//         flag=true
//         break
//     }
// }
// if(flag==false){
//     console.log("Prime")
// }else{
//     console.log("Not Prime")
// }

//print patter of star right half pyramid
// let n=5
// for(let i=1;i<=n;i++){
//     let str=""
//     for(let j=1;j<=i;j++){
//         str+="*"
//     }
//     console.log(str)
// }

//print patter of star reverse right half pyramid
// let n=5
// for(let i=1;i<=n;i++){
//     let str=""
//     for(let j=n;j>=i;j--){
//         str+="*"
//     }
//     console.log(str)
// }
// 

//print patter of star reverse left half pyramid
// let n=5
// for(let i=1;i<=n;i++){
//     let str=""
//     for(let j=1;j<=n-i;j++){
//         str+=" "
//     }
//     for(let k=1;k<=i;k++){
//         str+="*"
//     }
//     console.log(str)
// }
