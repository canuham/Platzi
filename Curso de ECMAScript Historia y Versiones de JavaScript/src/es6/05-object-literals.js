// enhaced object literals

function newUser(uId, user, age, country) {
    return {
        id: uId,
        user,
        age,
        country
    }
}

console.log(newUser(1, "Caraham", 23, "CO"));