// recursion to print all number from 1 to N
// let i = 0;
// function firstN(n) {
//   if (n == 0) return 0;
//   else {
//     console.log(++i);
//     return firstN(n - 1);
//   }

// }
// firstN(50);

//Create a function to calculate Fibonacci element using recursion.

// function fibonacci(n) {
//   if (n == 0) return 0;
//   if (n == 1) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(10));

// //Write a recursive function to calculate x raised to the power of n (i.e., x^n).
// function powerN(x,n){
//     if(n==0) return 1;
//     return x*powerN(x,n-1);
// }
// console.log(powerN(2,5));

//Write a recursive function to find the greatest common divisor (GCD) of two numbers a and b.

// function gcd(a, b) {
//   if (b == 0) return a;
//   return gcd(b, a % b);
// }
// console.log(gcd(55, 15));

//Write a recursive function to count the number of times a specific character appears in a string.

// function countChar(str, char) {
//   if (str.length == 0) return 0;
//   if (str[0] == char) return 1 + countChar(str.slice(1), char);
//   return countChar(str.slice(1), char);
// }

// console.log(countChar("Hellooooooo", "o"))


//Write a recursive function to check if a given string is a palindrome (reads the same forwards and backwards).

// function palindrome(str) {
//   if (str.length == 0) return true;
//   if (str[0] != str[str.length - 1]) return false;
//   return palindrome(str.slice(1, str.length - 1));
// }

// console.log(palindrome("madam"))
