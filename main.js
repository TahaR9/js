const name = 'TR';
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z; 


console.log(typeof x);
console.log(typeof z);

// Array
const numbers = [1,2,3,4,5];
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
console.log(numbers, fruits);

// Add value
fruits[4] = 'blueberries';

// Add value using push()
fruits.push('strawberries');

// Add to beginning
fruits.unshift('mangos');

// Remove last value
fruits.pop();

console.log(numbers, fruits);

// // Check if array
console.log(Array.isArray(fruits));

// // Get index
console.log(fruits.indexOf('oranges'));

// OBJECT LITERALS
const person = {
    firstName: 'TR',
    age: 18,
    hobbies: ['music', 'movies', 'sports'],
    address: {
      street: '50 Main st',
      city: 'Boston',
      state: 'AZ'
    }
}

  //Desturcturing ES6 
  const { firstname, age, address: {city} } = person;
  console.log(firstname);
  console.log(city);
  
  // Get single value
  console.log(person.firstName)

  // Get array value
  console.log(person.hobbies[1]);

  // Get embedded object
  console.log(person.address.city);

  // Add property
  person.email = 'jdoe@gmail.com';
  console.log(person.email);


// Array of objects
const todos = [
    {
      id: 1,
      text: 'Take out trash',
      isComplete: false
    },

    {
      id: 2,
      text: 'Dinner with wife',
      isComplete: false
    },

    {
      id: 3,
      text: 'Meeting with boss',
      isComplete: true
    }

];
  
  // Get specific object value
  console.log(todos[1].text);
  
  // Format as JSON
  console.log(JSON.stringify(todos));

  // Normal array of objects
  console.log(todos);

// LOOPS

// For
for(let i = 0; i < todos.length; i++){
    console.log(`For Loop Text: ${todos[i].id}: ${todos[i].text}`);
}
  
// While
let i = 0
while(i <= 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}
  
// Loop Through Arrays
// For Loop
for(let i = 0; i < todos.length; i++){
    console.log(` Todo ${todos[i].id}: ${todos[i].text}`);
}
  
// For...of Loop
for(let x of todos) {
    console.log(x.text);
}

// HIGH ORDER ARRAY METHODS (show prototype)

console.log("Higher Order Array Methods:");

// forEach() - Loops through array
todos.forEach(function(x) {
    console.log(`${x.id}: ${x.text}: ${x.isComplete}`);
    console.log(x); // Prototype: object
});

// forEach() - Loops through array SIMILAR
todos.forEach(function(x, i, myTodos) {
    console.log(`${i + 1}: ${x.text}`);
    console.log(myTodos); // // Prototype: Array
});

console.log("Mapping:");
// map() - Loop through and create new array
const todoTextArray = todos.map(function(x) {
    return x.text;
});
  
console.log(todoTextArray);
  
// filter() - Returns array based on condition
const todo1 = todos.filter(function(x) {
    // Return only todos where id is 1
    return x.id === 1; 
});

// filter + map
const todoCompleted = todos.filter(function(x) {

    return x.isComplete == false;
}).map(function(x) {

    return x.text;
});
console.log(todoCompleted);

// CONDITIONALS

// Simple If/Else Statement
const xx = 30;

if(xx === 10) {
  console.log('x is 10');
} else if(xx > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10');
}

// Switch
color = 'blue';

switch(color) {
  case 'red':
    console.log('color is red');
  case 'blue':
    console.log('color is blue');
  default:  
    console.log('color is not red or blue');
}

// Ternary operator / Shorthand if
const zz = color === 'red' ? 10 : 20;
console.log(zz);

// FUNCTIONS
function greet(greeting = 'Hello', name) {
    if(!name) {
      //console.log(greeting);
      return greeting;
    } else {
      //console.log(`${greeting} ${name}`);
      return `${greeting} ${name}`;
    }
  }
  
  
// ARROW FUNCTIONS ES6 (2015)
const greetx = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
console.log(greet('Not Hello'));
console.log(greetx('No way'));

function addNum (num = 1, num2 = 1) { // function
    
    return num + num2;
};

const addNum2 = (num = 5, num2 = 4) => { // ES6
    return num + num2;
};

const addNum3 = (num = 5, num2 = 5) => num + num2;

const addNum4 = num => num + 11;
console.log(addNum()); // else NaN
console.log(addNum2()); 
console.log(addNum3());
console.log(addNum4(5)); 

// OOP

// Constructor Function
function Person(firstName, lastName, dob) {
  // Set object properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // Set to actual date object using Date constructor
  // this.getBirthYear = function(){
  //   return this.dob.getFullYear();
  // }
  // this.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`
  // }
}

// Get Birth Year
Person.prototype.getBirthYear = function () { // Before object, now prototype
  return this.dob.getFullYear();
}

// Get Full Name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

// Instantiate an object from the class
const person1 = new Person('John', 'Doe', '7-8-80');
const person2 = new Person('Steve', 'Smith', '8-2-90');

console.log(person2);

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// Built in constructors
const namee = new String('Kevin');
console.log(typeof namee); // Shows 'Object'
const num = new Number(5);
console.log(typeof num); // Shows 'Object'

// ES6 CLASSES
class PersonNew {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  // Get Birth Year
  getBirthYear() {
    return this.dob.getFullYear();
  }

  // Get Full Name
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const personnew = new PersonNew('John', 'Doe', '7-8-69');
console.log(personnew.getBirthYear());
console.log(personnew);