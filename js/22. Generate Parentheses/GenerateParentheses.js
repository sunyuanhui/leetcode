/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    return generate(n - 1, n, '(');
};
var generate = function(left, right, s) {
    let s1 = (left !== 0 && right !== 0) ? generate(left - 1, right, s + '(') : [];
    let s2 = (right !== 0 && right > left) ? generate(left, right - 1, s + ')') : (left === 0) ? [s] : [];
    return [...s1, ...s2];
};
module.exports = generateParenthesis;
