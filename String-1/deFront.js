/*String-1 -- deFront
Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.

Examples

deFront('Hello') → llo
deFront('java') → va
deFront('away') → aay*/

function deFront(str){
  return  (str.charAt(0) === 'a' ? 'a' : '') 
          + (str.charAt(1) === 'b' ? 'b' : '') 
          + str.substring(2);
}
