// Exercise 1
//Destructuring: 
// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)

/*
let user = {
  name: "John",
  years: 30
}

var {name,years} = user;
var age = years;

console.log(name,age);
*/

/*
// Exercise 2
// Give the right name:
// Create the variable with the name of our planet. How would you name such a variable?
const earth
// Create the variable to store the name of the current visitor. How would you name that variable?
let currentVisit
*/

// Exercise 3
// Look at the code. What will be result of the call at the last line and why?


/*
let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi()

//Error there is not a complete falso/true statement

*/

// Exercise 4
// Write the code, one line for each action:
// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

/*
let user = {
  name: 'John',
  surname: 'Smith',
}

var {name} = user;

var name = 'Pete';

console.log(name);

delete user.name;

console.log(user);
*/

// Exercise 5
// Is it possible to change an object declared with const, how do you think and why?
/*
const user = {
  name: "John"
}

// does it work?
user.name = "Pete"

var surname = 'Doe'

user.surname = 'Doe'

console.log(user);
*/

// Exercise 6
// We have an object storing salaries of our team:

// let salaries = {
//   Fred: 100,
//   Ted: 160,
//   Ghaith: 130
// };

// for ( const key in salaries) {
//    var sum = salaries[key];
// };

// var { Fred, Ted, Ghaith} = salaries;

// console.log(Fred + Ted + Ghaith);

// Exercise 7
// Rewrite this if using the ternary operator '?':

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// var comp = ( a + b < 4) ? result = 'Below' : result = 'Over';

// Exercise 8
// Rewrite if..else using multiple ternary operators '?'.

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let message = (login == 'Employee') ? 'Hello' : login == 'Director'? 'Greetings' : login == '' ? 'No login' : "";
