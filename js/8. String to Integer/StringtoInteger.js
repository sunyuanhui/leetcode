/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    
    str = str.trim();
    if (str.length === 0) {
        return 0;
    }

    const sign = str[0] === '-' ? -1 : 1;
    if (str[0] === '+' || str[0] === '-') {
        str = str.substring(1);
    }

    let result = 0;
    for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if (c < '0' || c > '9') {
            return result * sign;
        }
        result = result * 10 + Number.parseInt(c);
        if (sign === 1 && result > INT_MAX) {
            return INT_MAX;
        }
        if (sign === -1 && result * sign < INT_MIN) {
            return INT_MIN;
        }
    }
    return result * sign;
};
module.exports = myAtoi;
