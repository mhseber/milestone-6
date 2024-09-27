// 11111111111111

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const doubled = [];
for (const num of number) {
    const double = num * 2;
    doubled.push(double)
}
// console.log(doubled);

// 2222222222222

const jNumber = [33, 50, 79, 78, 90, 101, 30];
const selected = jNumber.filter(j => j % 10 === 1)
// console.log(selected);
const selectedS = jNumber.find(j => j % 10 === 1)
// console.log(selectedS);

// 333333333333333

const programmer = [
    { name: 'Tusar', age: 28, position: 'Senior' },
    { name: 'Seber', age: 24, position: 'Junior' },
    { name: 'Hasan', age: 20, position: 'Junior' },
    { name: 'Rayhan', age: 26, position: 'Senior' },
]
const SeniorOs = programmer.filter(p => p.position === 'Senior');
// console.log(SeniorOs);


//44444444444444444444

const people = [
    { name: 'seber', age: 24 },
    { name: 'tusar', age: 30 },
    { name: 'kooko', age: 40 },
]
const peopleAge = people.reduce((sum, sum2) => sum + sum2.age, 0);
console.log(peopleAge)