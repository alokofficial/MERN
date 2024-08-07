const original={a:1, b:{c:3}};
const copy=JSON.parse(JSON.stringify(original)); //convert first to json and then to object

copy.a=2;
console.log(original)
console.log(copy)