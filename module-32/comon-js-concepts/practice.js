let first;

function second(a, b) {
    const total = a + b;
    // console.log(total)
}
second(1, 2)
const result = second(10, 10);
// console.log(result)

function third(a, b, c, d) {
    // console.log(a, b, c, d,)
}
third(2, 5, 4, 6)
// console.log(result);

const a = 5;
const b = 'Samsu kopsi ns raa'
const d = true;

// NEXT

// non-primitive type
const ages = [45, 65, 48];
const student = { id: 23, class: 7 }
// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);
// console.log(ages)
// console.log(student.id, student.class)

let x = 5;
let y = x;
// console.log(x, y);
y = 7;
// console.log(x, y);

let p = { job: 'web developer' }
let q = p;
q.job = 'front end developer'
// console.log(p, q);

//NEXT

let aa = 10;
let bb = 20;
let cc = 30;
let dd = 40;
let ee = 50;
let total = aa + bb + cc + dd + ee;
let allTotal = total - (aa + bb + cc + dd + ee);
if (total >= 150 && allTotal === 0) {
    // console.log('calculate is right')
}
else {
    // console.log('SORRY')
}


// NEXT


const xx = true;
if (xx) {
    // console.log('Value of x is truthy');

}
else {
    // console.log('Value of x is falsy');
}

//optional 
// check falsy
const yy = null;
if (!y) {
    // console.log('Value is false')
}
const z = { class: 9 };
//check true
if (!!x) {
    // console.log('Value is truthy')
}

// NEXT

const one = 2;
const two = 3;
if (one >= two) {
    // console.log('Value are equal')
}
else {
    // console.log('Value are not equal')
}


// NEXT

//primitive types are pass by value
let num1 = 5;
let num2 = 7;
function multiply(a, b) {
    a = 27;
    b = 22;
    const result = a * b;
    return result;
}
// console.log(num1)
const output = multiply(num1, num2)
// console.log(output)
// object and array are pass by reference
let student1 = { name: 'AAAA', partner: 'aaaa' }
let student2 = { name: 'BBBB', partner: 'bbbb' }
let student3 = { name: 'CCCC', partner: 'cccc' }
let student4 = { name: 'DDDD', partner: 'dddd' }
function makeMovie(couple1, couple2, couple3, couple4) {
    couple1.name = 'OOOO';
    couple2.name = 'TTTT';
    couple3.partner = 'WWWW';
    couple4.partner = 'JJJJ';

}
// console.log(student1, student2);
makeMovie(student1, student2, student3, student4);
// console.log(student1, student2, student3, student4);

//NEXT 

function kitchen() {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }
}
const firstServer = kitchen();
// console.log(firstServer);

// NEXT 

function greeting(greetingHandler, name) {
    greetingHandler(name);
}

function greetingHandler(name) {
    // console.log('Good Morning', name);
}
greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'rose');
greeting(greetingHandler, 'Stark');

// NEXT

function sum(a, b, c, d) {
    const args = [...arguments];
    console.log(args)
    const result = a + b + c + d;
    return result;
}

const totalPoints = sum(45, 67, 87, 54, 32, 333);
console.log(totalPoints)



