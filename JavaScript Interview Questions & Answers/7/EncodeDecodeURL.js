// How do you decode or encode a URL in JavaScript?
//It encodes all characters except the standard ASCII alphanumeric characters (A-Z, a-z, and 0-9), hyphen (“-“), underscore (“_”), period (“.”), and tilde (“~”).


const url = "https://frontend+masters.com";
const encodedURL = encodeURIComponent(url);
console.log(encodedURL); // "https%3A%2F%2Ffrontend%2Bmasters.com"
const decodedURL = decodeURIComponent(encodedURL);
console.log(decodedURL); // "https://frontend+masters.com"

const url2 = "mango & pineapple";
const encodedURL2 = encodeURIComponent(url2);
console.log(encodedURL2);
// Output: mango%20%26%20pineapple 

const url3 = "https://sample.com/search?q=hello world";

console.log(encodeURI(url3));
// Output: "https://sample.com/search?q=hello%20world"
console.log(decodeURI(url3));
// Output: https://sample.com/search?q=hello world


console.log(encodeURIComponent(url3));
// Output: https%3A%2F%2Fsample.com%2Fsearch%3Fq%3Dhello%20world