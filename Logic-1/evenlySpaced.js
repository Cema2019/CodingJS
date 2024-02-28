/*Logic-2 -- evenlySpaced
Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.

Examples

evenlySpaced(2, 4, 6) → true
evenlySpaced(4, 6, 2) → true
evenlySpaced(4, 6, 3) → false*/

//Option 1

function evenlySpaced(a, b, c){
  const sorted = [a, b, c].sort((x, y) => x - y);
  return sorted[1] - sorted[0] === sorted[2] - sorted[1];
}

//Option 2

function evenlySpaced(a, b, c){
  const min = Math.min(a, b, c);
  const max = Math.max(a, b, c);
  const medium = a + b + c - min - max;

  // Check if the difference between each pair is equal
  return Math.abs(min - medium) === Math.abs(medium - max);
}

