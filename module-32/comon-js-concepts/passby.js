//primitive types are pass by value
let num1 = 5;
let num2 = 7;
function multiply(a, b) {
    a = 27;
    const result = a * b;
    return result;
}
// console.log(num1)
const output = multiply(num1, num2)
// console.log(output)
// object and array are pass by reference
let student1 = { name: 'AAAA', partner: 'aaaa' }
let student2 = { name: 'BBBB', partner: 'bbbb' }
function makeMovie(couple1, couple2) {
    couple1.name = 'OOOO';
    couple2.name = 'TTTT';

}
console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);