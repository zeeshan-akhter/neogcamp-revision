//1.
// Your code here
const person = { name: "Zeeshan", age: 30 };
person.age = 21;
console.log(person.age); // Output: 35

//2.
//Your ES6 code here
const isSportsCar = ({ horsepower }) => horsepower >= 300;

const car1 = { make: "Porsche", model: "911", horsepower: 450 };
const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };
console.log(isSportsCar(car1)); // true
console.log(isSportsCar(car2)); // false

//3.
// Your ES6 code here
const isEligible = ({ age }, num) => age + num > 21;

const person1 = { name: "Ajay", age: 20 };
console.log(isEligible(person1, 1)); // false
console.log(isEligible(person1, 2)); // true

//4.
// Your ES6 code here
const getViews = ({ views }) => views > 1000;

const blog1 = {
  title: "How to Learn JavaScript",
  author: "John Doe",
  views: 1430,
};
const blog2 = {
  title: "10 Reasons to Start a Blog",
  author: "Jane Smith",
  views: 500,
};
console.log(getViews(blog1)); // true
console.log(getViews(blog2)); // false

//5.
let a = 1;
let b = 2;
// Your ES6 Code here

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1

//6.
// function add(a = 30, b = 0) {
//     return a + b
//   }

const add = (a, b) => a + b;

console.log(add(2, 3));

//7.
// Your ES6 function here
const combineObjects = (a, b) => ({ ...a, ...b });

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);
// Expected Output: {a: 1, b: 2, c: 3, d: 4}

//8.
// function getData(person) {
//     const name = person.name
//     const address = person.address.city
//     console.log(name) // John Doe
//     console.log(address) // New York
//   }

const getData = ({ name, address }) => console.log(name, address.city);

const person2 = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY",
  },
};
getData(person2);

//9.
// Youe ES6 code here
const stringToUpperCase = (str) => str.toUpperCase();
console.log(stringToUpperCase("hello")); // "HELLO"

//10.
// Your ES6 code here
const concatenateStrings = (str1, str2) => str1 + str2;
console.log(concatenateStrings("hello", "world")); // "helloworld"

//11.
// Your ES6 code here
const lastElement = (arr) => arr[arr.length - 1];
console.log(lastElement([1, 2, 3, 4, 5])); // 5

//12.
// Your ES6 code here
const firstElement = (arr) => arr[0];

console.log(firstElement([1, 2, 3, 4, 5])); // 1

//13.
// Your ES6 code here
const sumFirstElement = (arr, num) => arr[0] + num;
console.log(sumFirstElement([1, 2, 3], 5)); // 6

//14.
// Your ES6 code here
const sumFirstAndLast = (arr) => arr[0] + arr[arr.length - 1];
console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9

//15.
// Your ES6 code here
const personInfo = ({ name, age }) => `${name} is ${age} years old.`;

const person3 = { name: "John", age: 25, occupation: "Software Engineer" };
const person4 = { name: "Jane", age: 45, occupation: "Data Analyst" };
console.log(personInfo(person3)); // Expected output: "John is 25 years old."
console.log(personInfo(person4)); // Expected output: "Jane is 45 years old."
