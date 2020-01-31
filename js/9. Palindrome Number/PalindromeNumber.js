/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let t = x;
    let y = 0;
    while (t !== 0) {
        y = y * 10 + t % 10;
        t = (t - t % 10) / 10;
    }
    return y === x;
    
};
module.exports = isPalindrome;
