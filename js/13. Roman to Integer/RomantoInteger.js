/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romans = {
        'I': 1, 'IV': 4, 'V': 5, 'IX': 9, 'X': 10, 'XL': 40, 'L': 50,
        'XC': 90, 'C': 100, 'CD': 400, 'D': 500, 'CM': 900, 'M': 1000
    };

    let num = 0;
    while (s.length > 1) {
        let c = s.substring(0, 2);
        if (!romans.hasOwnProperty(c)) {
            c = s[0];
            s = s.substring(1);
        } else {
            s = s.substring(2);
        }
        num = num + romans[c];
    }
    return num + (s.length !== 0 ? romans[s] : 0);
};
module.exports = romanToInt;
