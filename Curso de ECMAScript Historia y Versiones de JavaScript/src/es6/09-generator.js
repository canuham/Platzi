
// function* = generator

// generator recuerda su estado en ejecución

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(["Oscar", "Camilo", "Ana", "Ulises", "Jennifer"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
