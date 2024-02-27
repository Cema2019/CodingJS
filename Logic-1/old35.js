/*Logic-1 -- old35
Return true if the given non-negative number is a multiple of 3 or 5, but not both. Use the % "mod" operator.

Examples

old35(3) → true
old35(10) → true
old35(15) → false*/

  function old35(n){
  return (n % 3 === 0) !== (n % 5 === 0);
}

/*The expression (n % 3 === 0) !== (n % 5 === 0) checks whether the given number n is a multiple of 3 or 5, 
but not both. In other words, it captures the requirement of being either a multiple of 3 or a multiple of 5.*/
