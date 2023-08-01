//Rewrite it, to perform the same, 
//but without if...else, and using arrow function.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return ('Do you have your parents permission to access this page?');
  }
}

let checkAge(age) => (age > 18)? return true : return ('Do you have your parents permission to access this page?');