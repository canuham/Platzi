class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //metodos

    //? ahora speak es privado, solo se puede usar dentro de la misma clase

    #speak() {
        return "Hello";
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }

    set #uAge(n) {
        this.age = n;
    }
}

const camilo = new user("camilo", 23);
console.log(camilo.uAge);
console.log(camilo.uAge = 24);