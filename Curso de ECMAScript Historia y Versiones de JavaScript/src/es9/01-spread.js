const user = { username: "caraham", age: 34, country: "CO" };
const { username, ...values } = user;
console.log(username);
console.log(values);