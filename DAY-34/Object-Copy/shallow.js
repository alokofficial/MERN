// shallow copy using spread operator
const original={a:1, b:2}
const copy={...original}

copy.a=3;
console.log(original)
console.log(copy)

//creates a shallow copy by spreading the properties of an original object into a new object.