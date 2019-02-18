// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  ' 3
//       ' ### ' 2
//       '#####'  1

function print(value, char) {
    for (let j = 1; j <= value; j++) {
        s += char;
    }
}
function pyramid(n) {
    let row = n;
    let column = 2 * n - 1;
    for (let i = 1; i <= row; i++) {
        let s = '';
        let jin = 2 * i - 1;
        let len = column;
        let space = len - jin;
        if (space) {
            let leftSpace = space / 2;
            let rigthSpace = space / 2;

           
            print(leftSpace, ' ');
            print(leftSpace, '#');
            print(rigthSpace, ' ');
            
            
        } else {
            print(leftSpace, '#');
        }
        console.log(s);
    }
}

module.exports = pyramid;
