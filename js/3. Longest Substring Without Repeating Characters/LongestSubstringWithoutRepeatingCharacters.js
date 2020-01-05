/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let alphebet = new Set();
    [...s].forEach((l) => alphebet.add(l));

    let subLen = 0;
    let subStr = [];
    let head = 0;
    for (let i = 0; i < s.length;) {
        let letter = s[i];
        if (subStr.includes(letter)) {
            if (subLen < subStr.length) {
                subLen = subStr.length;
                if (subLen === alphebet.size) {
                    return subLen;
                }
            }
            i = s.indexOf(letter, head) + 1;
            head = i;
            subStr = [];
            continue;
        }
        subStr.push(letter);
        i++;
    }

    if (subStr.length !== 0 && subLen < subStr.length) {
        subLen = subStr.length;
    }

    return subLen;
};
module.exports = lengthOfLongestSubstring;