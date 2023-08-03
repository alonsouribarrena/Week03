const obj = {name:"Jerry"}
const arr = [1, 5, "a", obj, true, 5, [1, 2], "9"]
//indexgui   0 ,1 , 2  , 3  , 4   , 5,    6  ,  7
console.log(arr.indexOf(5)); // = 1
console.log(arr.lastIndexOf(5)) // = 5

console.log(arr.indexOf("a"));
arr.indexOf("a")               // returns 2


console.log(arr.lastIndexOf("a"));
arr.lastIndexOf("a")           // returns 2

//estamos preguntando la key dentro del objeto.
arr.indexOf({name: "Jerry"})   // returns -1

arr.indexOf(obj)               // returns 3

console.log(arr.indexOf([1, 2]));

console.log(arr.indexOf([1, 2]));

arr.indexOf([1, 2])            // returns -1

// console.log(arr.lastIndexOf('9'));
arr.indexOf("9")               // returns 7

//porque no esta en la matrix
arr.indexOf(9)                 // returns -1

arr.indexOf("a", 5)            // returns -1

arr.indexOf(5, 5)              // returns 5

arr.lastIndexOf(5, 4)          // returns 1

arr.lastIndexOf(true, 3)       // returns -1