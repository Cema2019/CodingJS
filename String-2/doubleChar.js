/*String-2 -- doubleChar
Given a string, return a string where for every char in the original, there are two chars.

Examples

doubleChar('The') → TThhee
doubleChar('AAbb') → AAAAbbbb
doubleChar('Hi-There') → HHii--TThheerree*/

  function doubleChar(str){
  return str.split('').map(c => c + c).join('');
}
