/*String-2 -- catDog
Return true if the string "cat" and "dog" appear the same number of times in the given string.

Examples

catDog('catdog') → true
catDog('catcat') → false
catDog('1cat1cadodog') → true*/

function catDog(str){
  return Array.from(str.matchAll("cat")).length === 
    Array.from(str.matchAll("dog")).length;
}
