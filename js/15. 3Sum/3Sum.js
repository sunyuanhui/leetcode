/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        let v = nums[i]
        if (m.has(v)) {
            m.get(v).add(i);
        } else {
            m.set(v, new Set([i]));
        }
    }

    let result = [];
    let resultStrs = [];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j ++) {
            const c = 0 - nums[i] - nums[j];
            if (!m.has(c)) {
                continue;
            }

            let s = new Set(m.get(c));
            s.delete(i);
            s.delete(j);
            if (s.size === 0) {
                continue;
            }

            let r = [nums[i], nums[j], c].sort((a, b) => a - b);
            if (!resultStrs.includes(r.toString())) {
                result.push(r);
                resultStrs.push(r.toString());
            }
        }
    }
    return result;
};
module.exports = threeSum;
