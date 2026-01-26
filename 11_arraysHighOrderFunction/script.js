// Arrays High Order Index Functions

const students = ["Soumya", "Abir", "Snatik"];
const students1 = ["A", "b", "C"];
const students2 = ["D", "E", "F"];

function print(n) {
    console.log(n)
}

students.forEach(print); //1 method

students1.forEach((val) => console.log(val)) //2 method

students2.map((val) => console.log(val)) //3 method

const numbers = [1, 2, 3, 4, 5, 6, 7];

function double(n) {
    return n * 2;
}
let newArray = numbers.map(double);

console.log(newArray);

let newArr = numbers.slice(1, 5) // takes out the elemts from the array you want 
console.log(newArr)

let newArr1 = numbers.splice(1, 4); // deletes all the elemts from the original array and returns them into a new array.
console.log(newArr1)