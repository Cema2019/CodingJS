/*Array-1 -- biggerTwo
Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.

Examples

biggerTwo([1, 2], [3, 4]) → 3,4
biggerTwo([3, 4], [1, 2]) → 3,4
biggerTwo([1, 1], [1, 2]) → 1,2*/

function biggerTwo(a, b){
  
  const arr1 = a.reduce(
  (acc, currentValue) => acc + currentValue, 0,);
  const arr2 = b.reduce(
  (acc, currentValue) => acc + currentValue, 0,);
  
  return arr1 >= arr2 ? a : b;
}
