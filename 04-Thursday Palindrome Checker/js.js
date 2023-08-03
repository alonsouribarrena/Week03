// Thursday: Palindrome Checker
// Check for Palindromes
// Declare a function isPalindrome(str) that takes a string as an input.
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both 
// forward and backward, ignoring punctuation, case, and spacing.


//take the string
//make the string a array, reverse the array and join again the array to a string
//compare is the string with the reverse string.



function palindrome(string) {
const reverse = string.split('').reverse('').join('')
return string == reverse;
if( string == reverse){
}
 else {
}
}



console.log(palindrome('radar'));