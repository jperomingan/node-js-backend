// let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");
// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);
// console.log("Jennelyn");
// console.log(23);

// let firstName = "Jennelyn";
// console.log(firstName);

// let country = "Philippines";
// let continent = "Visayas";
// let population = 100000000;
// console.log(country, continent, population);

// let PI = 3.1415;
// console.log(PI);

var items = [1, 2];
var newItems = items.concat(3, 4, 5, "string", undefined);

console.log(newItems);

var people = [
  {
    name: "Shane",
  },
  {
    name: "Sally",
  },
];

var people2 = [
  {
    name: "Jennelyn",
  },
  {
    name: "Ben",
  },
];

people.concat(people2).forEach(function (person) {
  console.log(person.name);
});

// people2.forEach(function (person) {
//   console.log(person.name);
// });

// Adding a single element:
const cart = ["apple", "orange"];
cart.push("pear");

// Adding multiple elements:
const numbers = [1, 2];
numbers.push(3, 4, 5);

console.log(numbers);

const ingredients = ["eggs", "flour", "chocolate"];

const poppedIngredient = ingredients.pop(); // 'chocolate'
console.log(ingredients); // ['eggs', 'flour']

// Reverse Loop

const fruits = ["apricot", "banana", "cherry"];

for (let i = fruits.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${fruits[i]}`);
}

// Prints: 2. cherry
// Prints: 1. banana
// Prints: 0. apricot

const array = [0, 1, 2, 3];

// Looping Through Arrays
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Nested For Loop
for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner < 3; inner += 1) {
    console.log(`${outer}-${inner}`);
  }
}

// Do...While Statement
x = 0;
i = 0;

do {
  x = x + i;
  console.log(x);
  i++;
} while (i < 5);

// Prints: 0 1 3 6 10

// For Loop
for (let i = 0; i < 4; i += 1) {
  console.log(i);
}

// Output: 0, 1, 2, 3

// Looping Through Arrays
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Output: Every item in the array

// Break Keyword
for (let i = 0; i < 99; i += 1) {
  if (i > 5) {
    break;
  }
  console.log(i);
}

// Output: 0 1 2 3 4 5

for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner < 3; inner += 1) {
    console.log(`${outer}-${inner}`);
  }
}

/* 
  Output:
  0-0
  0-1
  0-2
  1-0
  1-1
  1-2
  */

//   Functions Assigned to Variables
let plusFive = (number) => number + 5;
// if is assigned the value of plusFive
let f = plusFive;

plusFive(3); // 8
// Since f has a function value, it can be invoked.
f(9); // 14

console.log(f(9));
