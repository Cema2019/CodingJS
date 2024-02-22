/*Array-2 -- has22
Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.

Examples

has22([1, 2, 2]) → true
has22([1, 2, 1, 2]) → false
has22([2, 1, 2]) → false*/

function has22(nums){
  return nums.toString().includes('2,2');
}
