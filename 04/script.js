//Ladder IF-Else
const age = 6;
if (age >= 18 && age < 80) {
    console.log("Can Vote")
} else if (age >= 80) {
    console.log("Senior citizen")
} else {
    console.log("Cannot vote")
}

//Ternary Operator
const age1 = 90;

age1 >= 19 ? console.log('yes') : console.log('no')

// or
const age2 = 6
let result = age2 >= 18 ? 'yes' : 'no'
console.log(result)

// switch statements 
const option = 1;
switch (option) {
    case 1:
        {
            console.log('Nomoshkar')
        }
        break
    case 2:
        {
            console.log('Hello')
        }
        break
    case 3:
        {
            console.log('Namaste')
        }
        break
    default:
        console.log('Invalid option')

}
//another example

let a = 30;
let opt = '+'
let b = 20;

switch (opt) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break
    default:
        console.log('IDK')
}