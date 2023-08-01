//Write a function pow(x,n) that returns x in power n. Or, 
//in other words, multiplies x by itself n times and returns the result.
//P.S. In this task the function should support only natural values of n: integers up from 1.

/*

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

*/
function pow(x,y){
  if (x > 0 && y > 0){
    console.log(x ** y);
    }
  } console.log('This functions only works with Natural Numbers, please change the values');

pow(2,100);

