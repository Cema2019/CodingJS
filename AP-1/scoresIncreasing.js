/*scoresIncreasing
Given an array of scores, return true if each score is equal or greater than the one before. The array will be length 2 or more.

Examples

scoresIncreasing([1, 3, 4]) → true
scoresIncreasing([1, 3, 2]) → false
scoresIncreasing([1, 1, 4]) → true*/

function scoresIncreasing(scores){
  return scores.every((num, i, arr) => i === 0 || num >= arr[i - 1]);
}
