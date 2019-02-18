// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverse(input) {
    return parseInt(input.split('').reverse().join(''));
}
/* function reverseInt(n) {
    const strN = n.toString();
    const reversed = reverse(strN);
    if (strN[0] !== '-') {
        return reversed;
    } else {
        return reversed * -1;
    }
} */

function reverseInt(n) {
    const strN = n.toString();
    const reversed = reverse(strN);
    return Math.sign(n) * reversed;
}

module.exports = reverseInt;
