/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const numsInGroup = numRows * 2 - 2;
    const groupNums = s.length / numsInGroup;
    groupNums += (s.length % numsInGroup == 0) ? 0 : 1;
    return 'PAHNAPLSIIGYIR';
};
module.exports = convert;