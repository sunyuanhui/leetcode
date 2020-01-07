/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let first = 0;
    let last = 0;
    for (let head = 0; head < s.length; head++) {
        if ((s.length - 1 - head) <= (last - first)) {
            break;
        }

        for (let tail = s.length - 1; tail > head; tail--) {
            if ((tail - head) <= (last - first)) {
                break;
            }

            for (let i = head, j = tail; i <= j; i++, j--) {
                if (s[i] !== s[j]) {
                    break;
                }

                if (i === j || (i + 1 === j)) {
                    if ((tail - head) > (last - first)) {
                        first = head;
                        last = tail;
                    }
                    break;
                }
            }
        }
    }
    return s.substring(first, last + 1);
};
module.exports = longestPalindrome;