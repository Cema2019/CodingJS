/*Warmup-1 -- stringE
Return true if the given string contains between 1 and 3 'e' chars.

Examples

stringE('Hello') → true
stringE('Heelle') → true
stringE('Heelele') → false*/

function stringE(str){
  const eCount = (str.match(/e/g) || []).length;
    
    return eCount >= 1 && eCount <= 3;
}
