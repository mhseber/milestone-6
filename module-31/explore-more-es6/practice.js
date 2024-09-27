const products = [
    { id: 1, name: 'Lenovo', price: 65000 },
    { id: 2, name: 'Dell', price: 45000 },
    { id: 3, name: 'Hp', price: 40000 },
    { id: 4, name: 'Mac', price: 150000 },
    { id: 5, name: 'Apple', price: 200000 },
    { id: 6, name: 'Walton', price: 90000 },

]

// map 1
const names = products.map(item => item.name);
// console.log(names)
const prices = products.map(p => p.price);
// console.log(prices)


// foreach 2

const listItem = products.forEach(list => console.log(list))
// console.log(listItem);

// filter 3

const expensive = products.filter(p => p.price > 500000);
// console.log(expensive);

// find 4 
const affordable = products.find(pro => pro.price > 50000);
// console.log(affordable)

//reduce
const total = products.reduce((a, b) => a + b.price, 0)
// console.log(total)
