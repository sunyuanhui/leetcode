/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let subLen = 0;
    for (let i = 0; i < s.length; i++) {
        let subStr = [s[i]];
        for (let j = i + 1; j < s.length; j++) {
            if (subStr.includes(s[j])) {
                break;
            }
            subStr.push(s[j]);
        }

        if (subLen < subStr.length) {
            subLen = subStr.length;
        }
    }

    return subLen;
};
module.exports = lengthOfLongestSubstring;