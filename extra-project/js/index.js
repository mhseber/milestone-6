const loadAllPhones = async () => {
    console.log("wow 3 second gone");
    document.getElementById("spinner").style.display = "none"

    // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const data = await response.json();
    console.log(data.data.slice(0, 6))
}

const displayAllPhone = (phones) => {
    console.log(phones)
}

const handleShowAll = () => {
    console.log("hello")
}

const handleSearch = () => {
    document.getElementById("spinner").style.display = "block";

    setTimeout(function () {
        loadAllPhones()
    }, 3000)
}
loadAllPhones()
