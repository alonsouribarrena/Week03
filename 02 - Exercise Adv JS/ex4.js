// Exercise 4
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.



let calculator = {
  read(){},
  sum(x,y){
    var add = x + y;
  },
  mul(x,y){
    var mult = x * y;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


