/*Warmup-1 -- frontBack
Given a string, return a new string where the first and last chars have been exchanged.

Examples

frontBack('code') → eodc
frontBack('a') → a
frontBack('ab') → ba*/

function frontBack(str){
  return str.length < 2 ? str : str.slice(-1)
        + str.substring(1, str.length - 1) + str.charAt(0);
          
}
