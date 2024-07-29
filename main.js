
let myString = "Hello!";
let myNumber = 20;
let myBoolean = true;
let myNull = null;
let myUndefined;
let myObject = { name: "Kian", age: 20 };
let mySymbol = Symbol("unique");

console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myNull);
console.log(myUndefined);
console.log(myObject);
console.log(mySymbol);


let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(num => num * 2);

let filteredNumbers = numbers.filter(num => num > 10);

let sum = numbers.reduce((acc, num) => acc + num, 0);

numbers.forEach(num => console.log(num));



function greet(name) {
    console.log(`Hello, ${name}!`);
}

function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

function findMax(arr) {
    return Math.max(...arr);
}
