// Funkcja strzałkowa z użyciem `return`
const sum = (a, b) => {
    return a + b;  // Zwraca sumę dwóch liczb
  };
  
  const result = sum(3, 4);
  console.log(result);  // Wyświetli: 7
  
  // Funkcja strzałkowa bez `return`
const greet = name => console.log("Hello, " + name);  // Funkcja wykonuje tylko logowanie

greet("John");  // Wyświetli: Hello, John


// Funkcja tradycyjna (Function Declaration)
function multiply(a, b) {
    return a * b;
  }
  
  console.log(multiply(3, 4));  // Wyświetli: 12

  
  // Funkcja wyrażeniowa (Function Expression)
const add = function(a, b) {
    return a + b;
  };
  
  console.log(add(2, 3));  // Wyświetli: 5

  // Funkcja strzałkowa z krótką składnią
const square = x => x * x;

console.log(square(5));  // Wyświetli: 25
