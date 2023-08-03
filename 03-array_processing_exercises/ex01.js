//Write a function filterRange(arr, a, b) that gets an array arr, looks for 
// elements between a and b in it and returns an array of them.
// The function should not modify the array. It should return the new array. 
// For instance:

// let arr = [5, 3, 8, 1]

// let filtered = filterRange(arr, 1, 4)

// alert( filtered )  // 3,1 (matching values)

// alert( arr )      // 5,3,8,1 (not modified)

//create a function that filters an array
//function will choose the array
//function has 2 value that are the indexes for the array output



//una funcion que me coja el indice 1 y me lo ponga en otra matrix y tb me haga lo mismo con el 4
// guardar esos valores en una variable
//esos valores meterlos en una matrix
//indice 1 for loop


let array = [5, 3, 8, 1];


const filterRange = (array,a,b) => {
  const arrayFiltered = [];
for (let counter of array ) {
  if ( (counter >= a && counter <= b) || (counter <= a && counter >= b) ) {
    arrayFiltered.push(counter);
  }
}
return arrayFiltered;
}

console.log(filterRange(array,1,4));



