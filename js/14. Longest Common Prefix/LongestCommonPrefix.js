/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }

    let prefix = '';
    let i = 0;
    while (1) {
        let c = '';
        for (let j = 0; j < strs.length; j++) {
            if (i === strs[j].length) {
                return prefix;
            }

            if (j === 0) {
                c = strs[j][i];
            } else {
                if (c !== strs[j][i]) {
                    return prefix;
                }
            }

            if (j === strs.length - 1) {
                i++;
                prefix = prefix + c;
            }
        }
    }
};
module.exports = longestCommonPrefix;
