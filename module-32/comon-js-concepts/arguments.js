function sum(a, b, c) {
    const args = [...arguments];
    console.log(args)
    const result = a + b + c;
    return result;
}

const total = sum(45, 67, 87, 54, 32, 333);
// console.log(total)