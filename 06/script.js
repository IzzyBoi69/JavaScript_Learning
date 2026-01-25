//loops

//for loop --> if you know how many times to loop
//we use for loop when we know how many iterations we want
// for (let i = 1; i <= 11; i++) {
//     console.log('Soumya')
// }

//we use while loop when we know the condition but dont know
// how many iterations we want

// let ip = 0
// let house = 100

// while (ip != house) {
//     ip++
//     console.log('step taken')
// }

//do while loop
// first runs the code and then checks the condition

// do {
//     ip++
//     console.log('step taken')
// } while (ip <= house)

// Lets create a game - guess the input

let number = 40;

let guess;
// do {
//     guess = parseInt(prompt("Guess a number"))
//     if (guess == number) {
//         alert('winner')
//         break;
//     }
// } while (guess != 0)

while (guess != 0) {
    guess = parseInt(prompt("Guess a number"))
    if (guess == number) {
        alert('winner') 0
        break;
    }
}