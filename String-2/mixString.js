/*String-2 -- mixString
Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.

Examples

mixString('abc', 'xyz') → axbycz
mixString('Hi', 'There') → HTihere
mixString('xxxx', 'There') → xTxhxexre*/

function mixString(a, b){
  let arrA = a.split('');
    let arrB = b.split('');
    let maxLength = Math.max(arrA.length, arrB.length);
    let result = Array(maxLength).fill().map((_, i) => (arrA[i] || '') + (arrB[i] || ''));
    return result.join('');
}
