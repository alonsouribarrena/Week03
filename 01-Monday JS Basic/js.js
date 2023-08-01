// const btn =document.getElementById('btn')


//Pseudocode Print 1-135
// print from the numeber 1 to the number 135 inclusive.
// use a for loop to get all the element a print in console.log
/*
for (let i = 0; i < 136; i++) {
  console.log(i);
};
*/

//Print odd numbers: 1,3,5,...
//print from the 1 to the 135, jumping the even numbers

// for (let i = 1; i <=135 ; i+=2) {

//   console.log(i);
// };

//Print Number is: 0 Sum: 0 = Number is: x Sum: y
//print numbers and addition from 1 to 135
//we need 3 let, one for the x= the counter and y for the sum and one 


/*
for (let x = 0; x <= 135; x++) {
 
  let y = x + ;

  // console.log(x);
  console.log(`Number is: ${x} Sum: ${y}`);
}
*/

//Print all elements from an array
//has to work in arrray all sizes
// make a variable for the array
//make a for loop for that arrary based on length
//print every index from the array

// var array = [1,4,2,12]

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

//Find Max
// Given an array X, write a program that would find the maximum 
// value of the array. Your program should work also work with 
// negative values (eg. X = [2,-3,-1]) and zero.
// we have to check the array and and print the maximun number from the array
//we loop the array and compare the values and print the hmax

/*
var array = [2,-3,1]

  if ((array[0] > array[1]) && (array[0] > array[2])){
    console.log(array[0]);
  } else if ((array[1] > array[2]) && (array[1] > array[0])) {
    console.log(array[1]);
  } else{
    console.log(array[2]);
  }
*/

//6: we have to add all the elemnts fo the array and we have to get the avergare
// take all the elements adding togueter and  and split between the arraylength.

/*
var array = [2,1,3]

let adding = array[0] + array[1] + array[2]

let average= adding/array.length

console.log(average);
*/
//7 we have to remove the negatives value from the array and replace with 0
//if statement
/*
var array = [2,-1,4,-3]
var arrayNoNegatives = []

for (let i = 0; i < array.length; i++) {
   let value = array.values()
  if(value >= 0){
    arrayNoNegatives.push(i);
  } else {
    arrayNoNegatives.push(0);
  }
};
*/
/*
array.forEach(function(value){

  let index = array.forEach(value)
  if( index >= 0){
    arrayNoNegatives.push(value);
  } else {
    arrayNoNegatives.push(0);
  }
})
*/
/*
if (array[0] >= 0){
  arrayNoNegatives.push(array[0]);
} else {
  arrayNoNegatives.push(0);
}
if (array[1] >= 0){
  arrayNoNegatives.push(array[1]);
} else {
  arrayNoNegatives.push(0);
}
if (array[2] >= 0){
  arrayNoNegatives.push(array[2]);
} else {
  arrayNoNegatives.push(0);
}
if (array[3] >= 0){
  arrayNoNegatives.push(array[3]);
} else {
  arrayNoNegatives.push(0);
}

console.log(array);
console.log(arrayNoNegatives);
*/

//Number to string:
//we have to takes the negatives numbers and replace for turing

let array = [1,-4,0,-1]
let turing = []

if (array[0] >= 0){
  turing.push(array[0]);
} else {
  turing.push('Turing');
}
if (array[1] >= 0){
  turing.push(array[1]);
} else {
  turing.push('Turing');
}
if (array[2] >= 0){
  turing.push(array[2]);
} else {
  turing.push('Turing');
}
if (array[3] >= 0){
  turing.push(array[3]);
} else {
  turing.push('Turing');
}

console.log(array);
console.log(turing);