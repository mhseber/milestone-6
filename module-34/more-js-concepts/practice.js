// Practice task 1 a
function message() {
    setTimeout(() => {
        // console.log('Hello Programmer')
    }, 5000)

}
message()

//b

function delayedGreeting(per1, per2) {
    setTimeout(function () {
        // console.log(`Hello, ${per1}!`);
    }, per2)
}
delayedGreeting('Alice', 2000);

//practice task 2

function tellJoke() {
    const intervalId = setInterval(function () {
        // console.log('Revive kar da vi Please');
    }, 2000);
    setTimeout(function () {
        clearInterval(intervalId);
        // console.log('Free Fire ')
    }, 10000)
}
tellJoke();

//practice task 3

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log('Data fetched successfully:', data);
    } catch (error) {
        console.log('Error fetching data:', error);

    }
}
fetchData();


