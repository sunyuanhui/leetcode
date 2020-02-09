/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let parentheses = { ')': '(', ']': '[', '}': '{' }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let top = stack.pop();
        if (top === undefined) {
            stack.push(s[i]);
        } else {
            if (parentheses[s[i]] !== top) {
                stack.push(top);
                stack.push(s[i]);
            }
        }
    }
    return stack.length === 0;
};
module.exports = isValid;
