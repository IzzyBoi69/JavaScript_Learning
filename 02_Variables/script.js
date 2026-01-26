//Variables
//var | let | const

// DataType varName = value; Strong Typed Language
//JS --> Loosely typed Language.

// var age = 22;
// console.log(age);

// var num1 = 10;
// var num2 = 20;
// console.log(num1 + num2);

// age = "Soumya"
// console.log(age)

// if (true) {
//     var age = 23;
// }
// console.log(age);

//var is a global variable whereas let and const is local

let age = 22;
console.log(age)

//proof that let is a local variable scope but we can 
// later re-assign both let and var unlike const.
if (true) {
    let a = 20;
    console.log(a)
}

//const is local and 
// if you assign a value with const 
// you cannot change the value associated with it 
// you cannot just intialize const and then later try to assign some 
// value to it

const age1 = 23;

console.log(age1)