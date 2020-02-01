/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 */
var isMatch = function(s, p) {
    if (p.length === 0) {
        return s.length === 0;
    }

    const firstMatched = s.length !== 0 && (s[0] === p[0] || p[0] === '.');

    if (p.length >= 2 && p[1] === '*') {
        return isMatch(s, p.substring(2)) 
            || (firstMatched && isMatch(s.substring(1), p));
    } else {
        return firstMatched && s.length !== 0 
            && isMatch(s.substring(1), p.substring(1));
    }
};
module.exports = isMatch;
