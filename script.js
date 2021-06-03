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
