/*Logic-2 -- noTeenSum
Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a teens. Write a separate helper "public int fixTeen(int n) {"that takes in an int value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as the main noTeenSum().

Examples

noTeenSum(1, 2, 3) → 6
noTeenSum(2, 13, 1) → 3
noTeenSum(2, 1, 14) → 3*/

//First option: With ternary operator.

function noTeenSum(a, b, c){
 // Check each value and adjust if it's a teen (excluding 15 and 16)
  a = (a >= 13 && a <= 19 && a !== 15 && a !== 16) ? 0 : a;
  b = (b >= 13 && b <= 19 && b !== 15 && b !== 16) ? 0 : b;
  c = (c >= 13 && c <= 19 && c !== 15 && c !== 16) ? 0 : c;

  // Return the sum of the adjusted values
  return a + b + c;
}

//Second: With functional programming.


Absolutely! Here's a more intuitive and concise way to define the noTeenSum function using higher-order functions and filtering:

JavaScript
function noTeenSum(a, b, c) {
  
  // Filter out values in the teen range (excluding 15 and 16)
  const filteredValues = [a, b, c].filter(
    (value) => value < 13 || value > 19 || value === 15 || value === 16
  );

  // Return the sum of the filtered values
  return filteredValues.reduce((sum, value) => sum + value, 0);
}
