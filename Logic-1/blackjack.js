/*Logic-2 -- blackjack
Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.

Examples

blackjack(19, 21) → 21
blackjack(21, 19) → 21
blackjack(19, 22) → 19*/

function blackjack(a, b){
 return (a > 21 && b > 21) ? 0 : 
         (a <= 21 && (a >= b || b > 21)) ? a :
         b;
}
