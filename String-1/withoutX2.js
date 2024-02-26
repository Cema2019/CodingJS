/*String-1 -- withoutX2
Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.

Examples

withoutX2('xHi') → Hi
withoutX2('Hxi') → Hi
withoutX2('Hi') → Hi*/

function withoutX2(str){
   let start = str.charAt(0) === 'x' ? "" : str.charAt(0);
  let second = str.charAt(1) === 'x' ? "" : str.charAt(1)
  return start + second + str.substring(2);
}
