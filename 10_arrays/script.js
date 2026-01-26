//arrays
// arrays in js is heterogenous

const students = ['soumya', 'abir', 'snatik'];
students[0] = 'Soumya Banerjee'
students.push('Alexa') //push adds values in the end of the array
students.push('Siri')
students.pop() //pop removes values from the end in the array.
students.reverse() //reverse reverses the array.
console.log(students);

const myArray = [1, true, "Soumya", "🥺"]
myArray.push({ name: "Soumya" })
console.log(myArray)
console.log(myArray.indexOf("Soumya"))