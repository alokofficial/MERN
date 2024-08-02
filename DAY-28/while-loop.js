// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }


//multiplication table of given number
// let i = 1;
// let n=5
// while(i<=10){
//     console.log(n*i);
//     i++;
// }

//sum all odd number from 1 to N;
// let i = 1;
// let n=10
// let sum=0
// while(i<=n){
//     if(i%2==1){
//         sum=sum+i
//     }
//     i++;
// }
// console.log(sum)

//calculate the factorial of given number;

// let i=1;
// let n=5
// let fact=1
// while(i<=n){
//     fact=fact*i
//     i++;
// }
// console.log(fact)


//sum of digit of an interger

// let n=456;
// let sum=0
// while(n>0){
//     let rem=n%10
//     sum=sum+rem
//     n=Math.floor(n/10)
// }
// console.log(sum)

//LCM of two numbers

// let a=4
// let b=6
// let lcm=1
// while(lcm<=a*b){
//     if(lcm%a==0 && lcm%b==0){
//         break
//     }
//     lcm++
// }
// console.log(lcm)

//GCD of two numbers

// let a=4
// let b=6
// let gcd=1
// while(a!=b){
//     if(a>b){
//         a=a-b
//     }
//     else{
//         b=b-a
//     }
// }
// console.log(a)

//prime number

// let n=13
// let i=2
// while(i<n){
//     if(n%i==0){
//         console.log("not prime")
//         break
//     }
//     i++
// }
// if(i==n){
//     console.log("prime")
// }

//Fibonacci series

// let a=0
// let b=1
// let i=1
// while(i<=10){
//     console.log(a)
//     let c=a+b
//     a=b
//     b=c
//     i++
// }