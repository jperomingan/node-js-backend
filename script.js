// let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");
// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);
// console.log("Jennelyn");
// console.log(23);

const { static } = require("express");

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

// Callback Functions
const isEven = (n) => n % 2 == 0;

let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`The number ${num} is an even number: ${isNumEven}.`);
};

// Pass in isEven as the callback function
printMsg(isEven, 4);
// Prints: The number 4 is an even number: True.

// Array Method .reduce()

const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum); // 10

// Array Method .forEach()
const numbers1 = [28, 77, 45, 99, 27];

numbers.forEach((number) => console.log(number));

// Array Method .filter()
const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter((n) => n > 5);

console.log(filteredArray);

// Array Method .map()
const finalParticipants = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];

const announcements = finalParticipants.map(
  (member) => member + " joined the contest. "
);

console.log(announcements);

// Dot Notation for Accessing Object Properties
const apple = {
  color: "Green",
  price: {
    bulk: "$3/kg",
    smallQty: "$4/kg",
  },
};

console.log(apple.color); // 'Green'
console.log(apple.price.bulk); // '$3/kg'

const classElection = {
  date: "January 12",
};

console.log(classElection.date); // undefined

// JavaScript Objects are Mutable
const student = {
  name: "Sheldon",
  score: 100,
  grade: "A",
};

console.log(student);
// { name: 'Sheldon', score: 100, grade: 'A'}

delete student.score;
student.grade = "F";
console.log(student);
// { name: 'Sheldon', grade: 'F' }

// student = {}
// TypeError: Assigment to constant variable

// JavaScript for ... in loop
let mobile = {
  brand: "Samsung",
  model: "Galaxy Note 9",
};

for (let key in mobile) {
  console.log(`${key}: ${mobile[key]}`);
}

const classOf2018 = {
  students: 38,
  year: 2018,
};

console.log(classOf2018);

// Delete operator
const person = {
  firstName: "Matilda",
  age: 27,
  hobby: "knitting",
  goal: "learning JavaScript",
};

delete person.hobby; // or delete
// person[hobby];

console.log(person);

/* 
{
    firstName: "Matilda"
    age: 27
    goal: "learning JavaScript"
}
*/

// javascript passing objects as arguments
const origNum = 8;
const origObj = { color: "blue" };

const changeItUp = (num, obj) => {
  num = 7;
  obj.color = "red";
};

changeItUp(origNum, origObj);

// Will output 8 since integers are passed by value.
console.log(origNum);

// Will output 'red' since objects are passed
// by reference and are therefore mutable.
console.log(origObj.color);

// JavaScript Object Methods
const engine = {
  // method shorthand, with one argument
  start(adverb) {
    console.log(`The engine starts up ${adverb}...`);
  },
  // anonymous arrow function expression with no arguments
  sputter: () => {
    console.log("The engine sputters...");
  },
};

const rubiksCubeFacts = {
  possiblePermutations: "43,252,003,274,489,856,000",
  invented: "1974",
  largestCube: "17x17x17",
};

const { possiblePermutations, invented, largestCube } = rubiksCubeFacts;
console.log(possiblePermutations); // '43,252,003,274,489,856,000'
console.log(invented);
console.log(largestCube);

// shorthand property name syntax for object creation
const activity = "Surfing";
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }

// this Keyword
const cat = {
  name: "Pipey",
  age: 8,
  whatName() {
    return this.name;
  },
};

console.log(cat.whatName());
// Output: Pipey

// javascript function this
const restaurant = {
  numCustomers: 45,
  seatCapacity: 100,
  availableSeats() {
    // this refers to the restaurant object and it's used to access its properties
    return this.seatCapacity - this.numCustomers;
  },
};

// JavaScript Arrow Function this Scope
const myObj = {
  data: "abc",
  loggerA: () => {
    console.log(this.data);
  },
  loggerB() {
    console.log(this.data);
  },
};

// getters and setters intercept property access

myObj.loggerA();
myObj.loggerB();

const myCat = {
  _name: "Snickers",
  get name() {
    return this._name;
  },
  set name(newName) {
    // Verify that newName is a non-empty string before setting as name property
    if (typeof newName === "string" && newName.length > 0) {
      this._name = newName;
    } else {
      console.log("ERROR: name must be a non-empty string");
    }
  },
};

// console.log(myCat.name("Jennelyn"), myCat._name);

// kavascript factory functions
// A factory function that accepts 'name',
// 'age', and 'breed' parameters to return
// a customized dog object.
const dogFactory = (name, age, breed) => {
  return {
    name: name,
    age: age,
    breed: breed,
    bark() {
      console.log("Woof!");
    },
  };
};

console.log(dogFactory().bark());

// const myCat = {
//   _name: "Dottie",
//   get name() {
//     return this._name;
//   },
//   set name(newName) {
//     this._name = newName;
//   },
// };

// // Reference invokes the getter
// console.log(myCat.name);

// // Assignment invokes the setter
// myCat.name = "Yankee";

// Class
class Song {
  constructor() {
    this.title;
    this.author;
  }

  play() {
    console.log("Song playing!");
  }
}

const mySong = new Song();
mySong.play();

// Class Constructor
class Song1 {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
}

const mySong1 = new Song1("Bohemian Rhapsody", "Queen");
console.log(mySong1.title, mySong1.artist);

// Class Methods
class Song2 {
  play() {
    console.log("Playing!");
  }
  stop() {
    console.log("Stopping!");
  }
}

const mySong3 = new Song2();
console.log(mySong3.play());

// class Media {
//   constructor(info) {
//     this.publishDate = info.publishDate;
//     this.name = info.name;
//   }
// }

// Parent class
class Media {
  constructor(info) {
    this.publishDate = info.publishDate;
    this.name = info.name;
  }
}

// Child class
class Song4 extends Media {
  constructor(songData) {
    super(songData);
    this.artist = songData.artist;
  }
}

const mySong5 = new Song({
  artist: "Queen",
  name: "Bohemian Rhapsody",
  publishDate: 1975,
});

console.log(mySong5.name, mySong5.artist, mySong5.publishDate);

// Static Methods

class Dog {
  constructor(name) {
    this._name = name;
  }

  introduce() {
    console.log("This is " + this._name + "!");
  }
  // A static method
  static bark() {
    console.log("Woof!");
  }
}

const myDog = new Dog("Buster");
myDog.introduce();

// Calling the static method
Dog.bark();

// States of a JavaScript Promise
const promise = new Promise((resolve, reject) => {
  const res = true;
  // An asynchronous operation.
  if (res) {
    resolve("Resolved!");
  } else {
    reject(Error("Error"));
  }
});

promise.then(
  (res) => console.log(res),
  (err) => alert(err)
);

// Creating a Javascript Promise object
const executorFn = (resolve, reject) => {
  console.log("The executor function of the promise!");
};

const promise1 = new Promise(executorFn);

// Executor function of JavaScript Promise object
const executorFn1 = (resolve, reject) => {
  resolve("Resolved!");
  console.log("Jennelyn, has been resolved!");
};

const promise2 = new Promise(executorFn1);

// setTimeout()
const loginAlert = () => console.log("Login");

setTimeout(loginAlert, 6000);
