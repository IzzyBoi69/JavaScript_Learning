//data types

//numbers
let num = 3.14
let num2 = 10

console.log(num + num2) // can play with any operator + - * /

//Strings
const firstName = "Soumya"
const lastName = "Banerjee"
console.log(firstName + " " + lastName)

//booleans means 1 and 0 JS considers 1 as true and 0 as false
// also the vice versa meaning it considers true as 1 and false as 0
let isLoggedIn = true;
console.log(isLoggedIn)

//null
let lastLoginDate = null;
console.log(lastLoginDate)

//undefined
let noLogin = undefined;
console.log(noLogin);

//objects
const person = {
    firstName: "Soumya",
    lastName: "Banerjee",
    age: 22,
    isLoggedIn: false,
    lastLoginDate: null,
}
console.log(person)

//if we multiply a string and a number javascript considers it as a number
// string '1' + '1' - string
// string + number = string
// string * number = number
// alphabet string * 1 = not a number NaN

console.log(typeof '123'); //typeof tells the type of variable it is