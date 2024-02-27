/*Warmup-2 -- noTriples
Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.

Examples

noTriples([1,1,2,2,1]) → true
noTriples([1,1,2,2,2,1]) → false
noTriples([1,1,2,2,2,1]) → false*/

function noTriples(nums){
  return nums.filter((num, i) => 
(nums[i] === nums[i + 1] && nums[i] === nums[i + 2])).length === 0;
}
