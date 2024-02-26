/*String-2 -- xyzMiddle
Given a string, does "xyz" appear in the middle of the string? To define middle, we'll say that the number of chars to the left and right of the "xyz" must differ by at most one. This problem is harder than it looks.

Examples

xyzMiddle('AAxyzBB') → true
xyzMiddle('AxyzBB') → true
xyzMiddle('AxyzBBB') → false*/

function xyzMiddle(str){
   let len = str.length;
    let mid = Math.floor(len / 2);
    let minDiff = len;
    let index = -1;

    for(let i = str.indexOf('xyz'); i !== -1; i = str.indexOf('xyz', i + 1)) {
        let diff = Math.abs(mid - (i + 1));
        if(diff < minDiff) {
            minDiff = diff;
            index = i;
        }
    }

    if(index === -1) {
        return false;
    }

    let leftLength = index;
    let rightLength = len - index - 3;

    return Math.abs(leftLength - rightLength) <= 1;
}
