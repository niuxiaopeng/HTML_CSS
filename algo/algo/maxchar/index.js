// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {};

    for (let s of str) {
        if (obj[s]) {
            obj[s]++;
        } else {
            obj[s] = 1
        }
    }

    let maxValue = 0;
    let maxKey = null;
    for (let o in obj) {
        if (obj[o] > maxValue) {
            maxValue = obj[o];
            maxKey = o;
        }
    }
    return maxKey;
}

module.exports = maxChar;
