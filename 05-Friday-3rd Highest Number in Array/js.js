//make 3 variables and set them to 0
//we loop throug every index in the array
//every index we compare if the number of the index 
// is bigger that the first variable is not,
// we compare with the second variable and if not with the third
//when we have gone through all the array and order all the 3 numbers
//we return the third.


console.log(thirdHigest([2,5,3,1,4,]))

function thirdHigest(array){
  var first = 0;
  var second = 0;
  var third = 0;
for (let i = 0; i < array.length; i++){
  if (array[i] > first){
    third = second;
    second = first;
    first = array[i]
  }
  else if (array[i]>second){
    third = second;
    second = array[i];
  }
  else if (array[i]>third){
    third = array[i];
  }
}
 return third;
}


/*
let array = [2,5,3,1,4,8,5,4,3,]
array.sort()
let third = array.length-2
console.log(array);
console.log(third);
*/
