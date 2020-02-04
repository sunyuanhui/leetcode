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

            let min = c;
            let mid;
            let max;
            if (min < nums[i]) {
                mid = nums[i];
            } else {
                mid = min;
                min = nums[i];
            }
            if (mid < nums[j]) {
                max = nums[j];
            } else {
                max = mid;
                if (min < nums[j]) {
                    mid = nums[j];
                } else {
                    mid = min;
                    min = nums[j];
                }
            }

            let r = [min, mid, max];
            let str = min + '' + mid + '' + max;
            if (!resultStrs.includes(str)) {
                result.push(r);
                resultStrs.push(str);
            }
        }
    }
    return result;
};
module.exports = threeSum;
