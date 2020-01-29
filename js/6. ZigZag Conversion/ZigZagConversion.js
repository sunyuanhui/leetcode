/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let numCharsInGroup = numRows * 2 - 2;
    if (numCharsInGroup === 0) {
        numCharsInGroup = numRows;
    }
    const numGroups = Math.ceil(s.length / numCharsInGroup);
    let numCharsInLastGroup = s.length % numCharsInGroup;
    if (numCharsInLastGroup === 0) {
        numCharsInLastGroup = numCharsInGroup;
    }

    let result = [];
    for (let i = 0; i < numGroups; i++) {
        result.push(s[i * numCharsInGroup]);
    }

    for (let row = 1; row < numRows - 1; row++) {
        let numCharsInRow = numGroups * 2;
        if (numCharsInLastGroup <= row) {
            numCharsInRow -= 2;
        } else if (numCharsInGroup - numCharsInLastGroup >= row) {
            numCharsInRow -= 1;
        }

        for (let i = 0; i < numCharsInRow; i++) {
            const charGroup = Math.floor(i / 2);
            const index = numCharsInGroup * charGroup + 
                (i % 2 === 1 ? (numCharsInGroup - row) : row);
            result.push(s[index]);
        }
    }

    if (numRows > 1) {
        const numCharsInLastRow = numGroups - (numCharsInLastGroup >= numRows ? 0 : 1);
        for (let i = 0; i < numCharsInLastRow; i++) {
            result.push(s[(numRows - 1) + numCharsInGroup * i]);
        }
    }

    return result.join('');
};
module.exports = convert;