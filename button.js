var button = document.querySelector('button');
var buttonStyle = document.getElementById("button");

class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    setAge(age) {
        this.age = age;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    getName() {
        return this.name;
    }
}

let person = new Human("huh", 32)
person.setAge(41)
console.log(person.getAge())

button.onclick = function receiveText() {
    console.log('Age: ' + person.getAge() + '\n' +
                'Name: ' + person.getName());

    buttonStyle.textContent = "working it.";
}