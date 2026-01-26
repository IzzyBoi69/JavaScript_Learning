// Arrow Functions

// 1. Syntax
const sayHello = () => {
    console.log("Heyy");
}

sayHello();

// const add = (a, b) => {
//     return a + b;
// }

const addV2 = (a, b) => a + b; //one liner function

console.log(addV2(3, 3));


// 2.'arguments' keyword is not there in arrow function
const addNumbers = (...nums) => {
    console.log(nums);
};

console.log(addNumbers(10, 22, 33, 44, 55))

// 3. Hoisting is only available in normal functions and not in arrow functions.

// sayHey();

// const sayHey = () => {
//     console.log("Hey there");
// }

//4. This Keyword does not work properly with arrow function
//    with the normal functions.

const obj = {
    value: 20,
    myFunction: function() {
        console.log('Value is ' + this.value);
    }
}

obj.myFunction();