// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* const strToObj = (input) => {
    const obj = {};
    for (let s of input) {
        if (obj[s]) {
            obj[s] += 1
        } else {
            obj[s] = 1;
        }
    }

    return obj;
};

function anagrams(stringA, stringB) {
    const objA = strToObj(stringA.replace(/[^\w]/g, '').toLowerCase());
    const objB = strToObj(stringB.replace(/[^\w]/g, '').toLowerCase());

    if (Object.keys(objA).length !== Object.keys(objB).length) return false;

    for (let o in objA) {
        if (objA[o] !== objB[o]) {
            return false;
        }
    }

    return true;
} */

function clearString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
function anagrams(stringA, stringB) {
    const newStrA = clearString(stringA);
    const newStrB = clearString(stringB);

    return newStrA === newStrB;
}

module.exports = anagrams;
