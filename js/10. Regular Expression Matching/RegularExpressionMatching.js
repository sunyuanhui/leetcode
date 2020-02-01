/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 */
var isMatch = function(s, p) {
    let sfi = 0;
    let pfi = 0;
    let asteriskMatched = 0;
    while (sfi < s.length && pfi < p.length) {
        if ((pfi + 1 < p.length) && p[pfi + 1] === '*') {
            while (sfi < s.length) {
                if (s[sfi] === p[pfi] || p[pfi] === '.') {
                    asteriskMatched++;
                    sfi++;
                } else {
                    break;
                }
            }
            pfi = pfi + 2;
        } else {
            if (s[sfi] === p[pfi] || p[pfi] === '.') {
                sfi++;
                pfi++;
            } else {
                return false;
            }
        }
    }

    if (pfi < p.length && asteriskMatched !== 0) {
        let sbi = s.length - 1;
        let pbi = p.length - 1;
        while (pfi <= pbi && asteriskMatched >= s.length - sbi) {
            if (p[pbi] === '*') {
                if (pfi === pbi) {
                    return false;
                }

                while (asteriskMatched >= s.length - sbi) {
                    if (s[sbi] === p[pbi - 1] || p[pbi - 1] === '.') {
                        sbi--;
                    } else {
                        break;
                    }
                }
                pbi = pbi - 2;
            } else if (s[sbi] === p[pbi] || p[pbi] === '.') {
                sbi--;
                pbi--;
            } else {
                return false;
            }
        }
        return pfi - 1 === pbi;
    }

    while (pfi < p.length - 1) {
        if (p[pfi] !== '*' && p[pfi + 1] === '*') {
            pfi = pfi + 2;
        } else {
            break;
        }
    }
    return (sfi === s.length) && (pfi === p.length);
};
module.exports = isMatch;
