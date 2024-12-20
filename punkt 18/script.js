// String
let greeting = "Hello, world!";

// Number
let age = 25;
let price = 19.99;

// Boolean
let isAvailable = true;
let isEmpty = false;

// Undefined
let user;

// Null
let car = null;


// Object
let person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

// Array
let fruits = ["Apple", "Banana", "Orange"];

// Function
function sum(a, b) {
  return a + b;
}

console.log(greeting);   // "Hello, world!"
console.log(age);        // 25
console.log(isAvailable); // true
console.log(user);       // undefined
console.log(car);        // null
person.greet();          // "Hello, Alice"
console.log(fruits[0]);  // "Apple"
console.log(sum(3, 4));  // 7


