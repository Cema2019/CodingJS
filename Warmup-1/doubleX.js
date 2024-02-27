/*Warmup-2 -- doubleX
Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

Examples

doubleX('axxbb') → true
doubleX('axaxax') → false
doubleX('xxxxx') → true*/

function doubleX(str){
  return str[str.indexOf('x') + 1] === 'x'
}
