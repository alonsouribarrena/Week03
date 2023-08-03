// Exercises 3
// Write the function getAverageAge(users) 
// that gets an array of objects with property 
// age and gets the average.

// The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:

// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 }
// let mary = { name: "Mary", age: 29 }

// let arr = [ john, pete, mary ]

// alert( getAverageAge(arr) )   // (25 + 30 + 29) / 3 = 28

const users = [{ name: "John", age: 25 }, { name: "Pete", age: 30 }, { name: "Mary", age: 29 }]
const getAverageAge = users => {
  let total = 0;
  let ages =users.map(user => user.age)
  for (let age of ages){
     total += age
  }
 return total/ages.length
}

console.log(getAverageAge(users));