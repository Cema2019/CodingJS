/*Array-2 -- more14
Given an array of ints, return true if the number of 1's is greater than the number of 4's

Examples

more14([1, 4, 1]) → true
more14([1, 4, 1, 4]) → false
more14([1, 1]) → true*/

function more14(nums){
  return nums.filter(n => n === 1).length > 
    nums.filter(n => n === 4).length;
}
