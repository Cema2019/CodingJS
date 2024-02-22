/*Array-1 -- sum2
Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.

Examples

sum2([1, 2, 3]) → 3
sum2([1, 1]) → 2
sum2([1, 1, 1, 1]) → 2*/

  function sum2(nums){
    // Handle empty array case
  if (nums.length === 0) {
    return 0;
  }

  // Return the single element if length is 1
  if (nums.length === 1) {
    return nums[0];
  }

  return nums
           .slice(0, 2)
           .reduce((acc, num) => acc + num, 0);
}
