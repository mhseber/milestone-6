class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log(`Sleeping now ${this.name}`)
    }
}
const kodom = new person('kodom Ali', 21)
console.log(kodom)
kodom.sleep()