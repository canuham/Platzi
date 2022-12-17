// declarando
class User { };

//instancia de una clase
/* const newUser = new User(); */

class user {
    // metodos
    greeting() {
        return "Hello";
    }
};

const caraham = new user();
console.log(caraham.greeting());
const developer = new user();
console.log(developer.greeting());


// constructor

class user {
    //constructor
    constructor() {
        console.log("Nuevo Usuario");
    }
    greeting() {
        return "Hello";
    }
}

const shoma = new user();

// this

class user {
    constructor(name) {
        this.name = name;
    }
    //metodos
    speak() {
        return "Hello";
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const safyrha = new user("Micaela");
console.log(safyrha.greeting());

// setters and getters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //metodos

    speak() {
        return "Hello";
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }

    set uAge(n) {
        this.age = n;
    }
}

const camilo = new user("camilo", 23);
console.log(camilo.uAge);
console.log(camilo.uAge = 24);