function a() {
    console.log('a')
    b();
    console.log('aa')
}
function b() {
    console.log('b')
    c()
    console.log('bb')
}
function c() {
    console.log('c')
    console.log('cc')
}
function d() {
    console.log('d')
    e()
    console.log('dd')
}
function e() {
    console.log('e')
    console.log('ee')
}

setTimeout(() => {
    console.log('inside timeout')
}, 2000)
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
a()
e()