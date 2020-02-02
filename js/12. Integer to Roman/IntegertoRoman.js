/**
 * @param {number} num
 * @return {string}
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 */
var intToRoman = function(num) {
    const romans = [
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        ['', 'M', 'MM', 'MMM']
    ];
    let roman = '';
    for (let i = 0; num !== 0; i++) {
        const n = num % 10;
        num = (num - num % 10) / 10;
        roman = romans[i][n] + roman;
    }
    return roman;
};
module.exports = intToRoman;
