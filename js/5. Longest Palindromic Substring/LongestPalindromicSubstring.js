/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let first = 0;
    let last = 0;
    let alphabet = {};
    for (let i = 0; i < s.length; i++) {
        let l = s[i];
        alphabet[l] = alphabet[l] ? [...alphabet[l], i] : [i];
    }

    if (Object.keys(alphabet).length === 1) {
        return s;
    }

    Object.keys(alphabet).forEach((letter) => {
        let indexs = alphabet[letter];

        for (let headIndex = 0; headIndex < indexs.length; headIndex++) {
            let head = indexs[headIndex];

            for (let tailIndex = indexs.length - 1; tailIndex > 0; tailIndex--) {
                let tail = indexs[tailIndex];
                if ((tail - head) <= (last - first)) {
                    break;
                }

                for (let i = head, j = tail; i <= j; i++ , j--) {
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
    })
    return s.substring(first, last + 1);
};
module.exports = longestPalindrome;