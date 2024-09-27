/**
 Truthy:
 1. true
 2. any number (+ve, -ve) will be truthy other then 0.
 3. any string other then empty string.
 4. '0' 'false'
 5.{}
 6.[]

 Falsy:
 1. false
 2. 0
 3. '' (empty string)
 4. undefined
 5. null
 */



const x = false;
if (x) {
    console.log('Value of x is truthy');

}
else {
    console.log('Value of x is falsy');
}

//optional 
// check falsy
const y = null;
if (!y) {
    console.log('Value is false')
}
const z = { class: 9 };
//check true
if (!!x) {
    console.log('Value is truthy')
}