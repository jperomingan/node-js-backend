// 1.)  Declaring variables
// Longhand
// let x;
// let y = 20;

// Shorthand
let x,
  y = 20;

function sayHello(name) {
  console.log("Hello" + name);
}

sayHello(y);

// 2.) Assigning values to multiple variables
// Longhand
// let a, b, c;
// a = 5;
// b = 8;
// c = 12;

//Shorthand
let [a, b, c] = [5, 8, 12];
console.log(a, b, c);

// 3.) The Ternary operator
// Longhand
// let marks = 26;
// let result;
// if (marks >= 30) {
//   result = 'Pass';
// } else {
//   result = 'Fail';
// }

// Shorthand
let marks = 26;
let result = marks >= 30 ? "Pass" : "Fail";
console.log(result);

// 4.) Assigning default value
//Longhand
// let imagePath;
// let path = getImagePath();
// // if(path !== null && path !== undefined && path !== '') {
// //   imagePath = path;
// // } else {
// //   imagePath = 'default.jpg';
// // }

// // Shorthand
// let imagePath = getImagePath() || "default.jpg";
// console.log(imagePath);

// 5.) AND(&&) Short circuit evaluation
// Longhand
let isLoggedin;
if (isLoggedin) {
  goToHomePage();
}

// Shorthand
isLoggedin && goToHomePage();

console.log(isLoggedin && goToHomePage());

// 6.) Swap two variables
// let c = "Hello",
d = 55;

// Longhand
// const temp = x;
// x = y;
// y = temp;

// Shorthand
[c, d] = [d, c];

console.log(c, d);

// 7.) Arrow Function
// Longhand
// function add(num1, num2) {
//   return num1 + num2;
// }

//Shorthand
const add = (num1, num2) => num1 + num2;

console.log(add(4, 5));

// 8.) Template Literals
let number = 3;
let time = "2pm";
// Longhand
console.log("You got a missed call from " + number + " at " + time);

// Shorthand
console.log("You got a missed call from " + number + " at " + time);
