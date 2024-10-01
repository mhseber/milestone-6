const user = { id: 1, name: 'ssssss', job: 'actor' };
//JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
console.log(user);
// console.log(stringified);

const shop = {
    owner: 'MH SEBER',
    address: {
        street: 'Gandaria Dhaka',
        city: 'Dhaka',
        country: 'BD'
    },
    products: ['Laptop', 'Mic', 'Monitor', 'Keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
// console.log(shop);
const shopJson = JSON.stringify(shop);
// console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj)