/*AP-1 -- scores100
Given an array of scores, return true if there are scores of 100 next to each other in the array. The array length will be at least 2.

Examples

scores100([1, 100, 100]) → true
scores100([1, 100, 99, 100]) → false
scores100([100, 1, 100, 100]) → true*/

function scores100(scores){
  return scores.some((x, i, arr) => x === 100 && arr[i + 1] === 100);
}
