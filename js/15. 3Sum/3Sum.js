/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        let k = nums[i]
        if (m.has(k)) {
            m.get(k).add(i);
        } else {
            m.set(k, new Set([i]));
        }
    }

    nums = Array.from(m.keys());
    let result = [];
    let resultStrs = [];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j ++) {
            let a = nums[i];
            let b = nums[j];
            const c = 0 - a - b;
            if (!m.has(c) || a === c || b === c) {
                continue;
            }

            let r = [a, b, c].sort((x, y) => x - y);
            if (!resultStrs.includes(r.toString())) {
                result.push(r);
                resultStrs.push(r.toString());
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        let v = m.get(a);
        if (v.size < 2 || (a === 0 && v.size ===2)) {
            continue;
        }

        const c = 0 - a * 2;
        if (!m.has(c)) {
            continue;
        }

        let r = [a, a, c].sort((a, b) => a - b);
        if (!resultStrs.includes(r.toString())) {
            result.push(r);
            resultStrs.push(r.toString());
        }
    }
    return result;
};
module.exports = threeSum;
