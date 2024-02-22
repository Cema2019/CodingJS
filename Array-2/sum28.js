/*Array-2 -- sum28
Given an array of ints, return true if the sum of all the 2's in the array is exactly 8.

Examples

sum28([2, 3, 2, 2, 4, 2]) → true
sum28([2, 3, 2, 2, 4, 2, 2]) → false
sum28([1, 2, 3, 4]) → false*/

  function sum28(nums){
  return nums.filter(n => n === 2).length*2 === 8;
}
