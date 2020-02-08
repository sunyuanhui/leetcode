/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const lettersMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    
    if (digits === '') {
        return [];
    }
    return find(lettersMap, lettersMap[digits[0]], digits.substring(1));
};
var find = function(lettersMap, letters, left) {
    if (left === '') {
        return letters;
    }

    let result = [];
    for (let i = 0; i < letters.length; i++) {
        let nextLetters = find(lettersMap, lettersMap[left[0]], left.substring(1));
        for (let j = 0; j < nextLetters.length; j++) {
            result.push(letters[i] + nextLetters[j]);
        }
    }
    return result;
};
module.exports = letterCombinations;
