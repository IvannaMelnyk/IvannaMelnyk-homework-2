// task1
let admin = "Anna";
let user = "Anna";

alert(admin);
console.log(admin);
console.log(typeof admin);

// // task2
let student = "ivan";
let newStudent = student.charAt(0).toUpperCase() + student.slice(1);

console.log(newStudent);

// task3
const message = "Welcome to Amsterdam!";
console.log(message.length); //21

console.log(message.toLowerCase()); //welcome to amsterdam!
console.log(message.toUpperCase()); //WELCOME TO AMSTERDAM!
console.log(message.indexOf("Welcome")); //0
console.log(message.includes("welcome")); //false

//  task4
let a = "";
let b = "bbb";
let c = false;

let test1 = !b.length === c; // true

console.log(test1);

let test2 = a.length > b.length; // false

let test3 = !a.length && !b.length; // false

let test4 = a === c; // false
