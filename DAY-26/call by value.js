function trySwap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log(`a = ${a}, b = ${b}`);
}
function main() {
    let a = 10;
    let b = 20;
    trySwap(a, b);
    console.log(`a = ${a}, b = ${b}`);
}
main()