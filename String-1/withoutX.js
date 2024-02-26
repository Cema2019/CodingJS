/*String-1 -- withoutX
Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

Examples

withoutX('xHix') → Hi
withoutX('xHi') → Hi
withoutX('Hxix') → Hxi*/

function withoutX(str){
   let start = str.charAt(0) === 'x' ? 1 : 0;
  let end = str.charAt(str.length - 1) === 'x' ? -1 : str.length;
  return str.slice(start, end);
}
