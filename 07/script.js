//function

function sayHello() {
    console.log('Hey Soumya')
}

sayHello() //calling of function

let c;

function add(a, b) {
    return a + b
}
let ans = add(4, 2)
console.log("The sum of the numbers is ", ans)

function multiply(a, b) {
    return a * b
}

let a = multiply(5, 4)
console.log("the answer is", a)

function addNumbers() {
    let n = parseInt(prompt("Enter the value of numbers you want to add: "));
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let num = parseInt(prompt("Enter number {i}:"));
        sum += num;
    }
    return sum;
}
let result = addNumbers();
console.log("The sum of n nu5mbers is: ", result);