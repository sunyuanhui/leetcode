/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const MAX_VALUE = 2147483647;
    const MIN_VALUE = -2147483648;
    if (x > MAX_VALUE || x < MIN_VALUE) {
        return 0;
    }

    let sign = x >= 0 ? 1 : -1;
    x = x * sign;
    let result = 0;
    while (x !== 0) {
        result = result * 10 + x % 10;
        x = (x - x % 10) / 10;
        if (result > MAX_VALUE || result < MIN_VALUE) {
            return 0;
        }
    }
    return result * sign;
};
module.exports = reverse;
