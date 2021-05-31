// 1.)  Declaring variables
// Longhand
// let x;
// let y = 20;

const { object } = require("firebase-functions/lib/providers/storage");

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

// 9.) Multi-line String

// Longhand
console.log(
  "JavaScript, often abbreviated as JS, is a\n" +
    "programming language that conforms to the \n" +
    "ECMAScript specification. JavaScript is high-level, \n" +
    "often just-in-time compiled, and multi-paradigm"
);

//Shorthand
console.log(`JavaScript, often abbreviated as JS, is a 
  programming language that conforms to the ECMAScript specification. JavaScript 
  is high-level, often just-in-time compiled, and multi-paradigm.`);

// 10.) Multiple condition checking
// Longhand
let value = 1;
if (value === 1 || value === "one" || value === 2 || vaue === "two") {
  // Execute some code
}

// Shorthand 1
if ([1, "one", 2, "two"].indexOf(value) >= 0) {
  // Execute some code
  console.log("Jennelyn shorthand 1");
}

// Shorthand 2
if ([1, "one", 2, "two"].includes(value)) {
  // Execute some code
  console.log("Jennelyn shorthand 2");
}

// 11.) Object Property Assignment
let firstname = "Amitav";
let lastname = "Mishra";

// Longhand
let obj1 = { firstname: firstname, lastname: lastname };
console.log(obj1);

// Shorthand
let obj2 = { firstname, lastname };
console.log(obj2);

// 12.) String into a Number
// Longhand
// let total = parseInt("453");
// let average = parseFloat("42.6");

// Shorthand
let total = +"453";
let average = +"42.6";

console.log(total, average);

// 13.) Repeat a string for multiple times
// Longhand
let str = "";
for (let i = 0; i < 5; i++) {
  str += "Hello ";
}
console.log(str); //

// Shorthand
"Hello ".repeat(5);
console.log("Hello ".repeat(5));

// 14.) Exponent Power
// Longhand
const power1 = Math.pow(4, 3); // 64

// Shorthand
const power2 = 4 ** 3; // 64

console.log(power1, power2);

// 15.) Double NOT bitwise operator (~ ~)
// Longhand
const floor1 = Math.floor(6.8); //6

// Shorthand
const floor2 = ~~6.8; // 6

console.log(floor1, floor2);

// 16.) Find max and min number in array
// Shorthand
const arr = [2, 8, 15, 4];
Math.max(...arr); // 15
Math.min(...arr); // 2

console.log(arr, Math.max(...arr), Math.min(...arr));

// 17.) For loop
let arr1 = [10, 20, 30, 40];

// Longhand
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Shorthand
// for of loop
for (const val of arr) {
  console.log(val);
}

// for in loop
for (const index in arr) {
  console.log(`index: ${index} and value: ${arr[index]}`);
}

let obj3 = { x: 20, y: 50 };
for (const key in obj3) {
  console.log(obj3[key]);
}

// 18.) Merging of arrays
let arr2 = [20, 30];

// Longhand
let arr3 = arr2.concat([60, 80]);
// [20, 30, 60, 80]

// Shorthand
let arr4 = [...arr2, 60, 80];
// [20, 30, 60, 80]

console.log(arr2, arr3);

// 19.) Deep cloning of multi-level object
let obj = { x: 20, y: { z: 30 } };

//Longhand
const makeDeepClone = (obj) => {
  let newObject = {};
  Object.keys(obj).map((key) => {
    if (typeof obj[key] === "object") {
      newObject[key] = makeDeepClone(obj[key]);
    } else {
      newObject[key] = obj[key];
    }
  });
  return newObject;
};

const cloneObj1 = makeDeepClone(obj);

// Shorthand
const cloneObj2 = JSON.parse(JSON.stringify(obj));

// Shorthand for single level object
let obj4 = { x: 20, y: "hello" };
const cloneObj3 = { ...obj4 };

console.log(cloneObj1, cloneObj2, cloneObj3);
