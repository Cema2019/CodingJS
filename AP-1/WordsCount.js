/*AP-1 -- wordsCount
Given an array of strings, return the count of the number of strings with the given length.

Examples

wordsCount(['a', 'bb', 'b', 'ccc'], 1) → 2
wordsCount(['a', 'bb', 'b', 'ccc'], 3) → 1
wordsCount(['a', 'bb', 'b', 'ccc'], 4) → 0*/

function wordsCount(words, len){
  return words.filter((word) => word.length === len).length;
}
