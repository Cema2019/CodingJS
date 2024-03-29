/*Array-2 -- lucky13
Given an array of ints, return true if the array contains no 1's and no 3's.

Examples

lucky13([0, 2, 4]) → true
lucky13([1, 2, 3]) → false
lucky13([1, 2, 4]) → false*/

function lucky13(nums){
  return !(nums.toString().includes('1') || nums.toString().includes('3'));
}
