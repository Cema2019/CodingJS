/*String-1 -- conCat
Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

Examples

conCat('abc', 'cat') → abcat
conCat('dog', 'cat') → dogcat
conCat('abc', '') → abc*/

function conCat(a, b){
return a.concat(b.charAt(0) === a.charAt(a.length - 1) ? b.slice(1) : b);
  }
