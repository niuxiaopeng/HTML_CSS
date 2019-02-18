// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* function reverse(str) {
    let newStrArr = [];
    for (let i of str) {
        newStrArr.unshift(i);
    }
    return newStrArr.join('');
} */


/* function reverse(str) {
    return str.split('').reverse().join('');
} */

/* function reverse(str) {
    let newStr = '';
    for (let s of str) {
        newStr = s + newStr;
    }
    return newStr;
}
 */

function reverse(str) {
    return str.split('').reduce((p, c) => c + p, '');
}

module.exports = reverse;
