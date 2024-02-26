/*String-2 -- countHi
Return the number of times that the string "hi" appears anywhere in the given string.

Examples

countHi('abc hi ho') → 1
countHi('ABChi hi') → 2
countHi('hihi') → 2*/

function countHi(str){
  return Array.from(str.matchAll("hi")).length;
}
