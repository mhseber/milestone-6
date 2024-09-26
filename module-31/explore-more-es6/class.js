const products = [
    { id: 1, name: 'Lenovo', price: 65000 },
    { id: 2, name: 'Dell', price: 45000 },
    { id: 3, name: 'Hp', price: 40000 },
    { id: 4, name: 'Mac', price: 150000 },
];

// has some properties, method

class product {
    country = 'Bangladesh';
    constructor(name) {
        this.name = name;
    }
    speak(talk) {
        console.log(`talking about ${talk}`)
    }
}
const Lenovo = new product('le le lenovo')
console.log(Lenovo)
Lenovo.speak('oba kita kau')