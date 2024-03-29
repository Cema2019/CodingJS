/*Array-1 -- double23
Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.

Examples

double23([2, 2]) → true
double23([3, 3]) → true
double23([2, 3]) → false*/

function double23(nums){
  return (nums.filter(n => n === 2).length === 2) || (nums.filter(n => n === 3).length === 2);
}
