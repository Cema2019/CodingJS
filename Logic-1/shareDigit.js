/*Logic-1 -- shareDigit
Given two ints, each in the range 10..99, return true if there is a digit that appears in both numbers, such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives the left digit while the % "mod" n%10 gives the right digit.)

Examples

shareDigit(12, 23) → true
shareDigit(12, 43) → false
shareDigit(12, 44) → false*/

//Option 1. Mod %

function shareDigit(a, b){
const a1 = Math.floor(a / 10);   // left digit of 'a'
    const a2 = a % 10;   // right digit of 'a'
    const b1 = Math.floor(b / 10);   // left digit of 'b'
    const b2 = b % 10;   // right digit of 'b'

    // Check if any of the digits match
    return a1 === b1 || a1 === b2 || a2 === b1 || a2 === b2;
}

// Option 2. String coversion

function shareDigit(a, b){
    const aDigits = a.toString().split('').map(Number);   // Convert 'a' to an array of digits
    const bDigits = String(b).split('').map(Number);   // Convert 'b' to an array of digits

    // Check if any of the digits match
    return aDigits.some(digit => bDigits.includes(digit));
}
