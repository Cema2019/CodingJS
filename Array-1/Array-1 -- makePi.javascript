/*Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.

Examples

makePi() → 3,1,4*/

function makePi(){
  return String(Math.PI)
    .replace(/\./g, '')
    .slice(0, 3)     
    .split("") 
    .map(Number); 
}
