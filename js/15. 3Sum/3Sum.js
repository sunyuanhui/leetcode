/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        let count = m.get(nums[i]);
        m.set(nums[i], count === undefined ? 1 : count + 1);
    }
    if (m.size < 2) {
        return m.get(0) > 2 ? [[0, 0, 0]] : [];
    }

    nums = nums.sort((x, y) => x - y);

    let result = [];
    let resultStrs = [];
    for (let i = 0; i < nums.length - 2; i++) {
        let a = nums[i];
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let b = nums[j];
            let c = nums[k];
            if (a + b + c === 0) {
                let r = [a, b, c].sort((x, y) => x - y);
                if (!resultStrs.includes(r.toString())) {
                    result.push(r);
                    resultStrs.push(r.toString());
                }
                j++;
                k--;
            }
            if (a + b + c > 0) {
                k--;
            }
            if (a + b + c < 0) {
                j++;
            }
            if ((a > 0 && b > 0 && c > 0) || (a < 0 && b < 0 && c < 0)) {
                break;
            }
        }
    }
    return result;
};
module.exports = threeSum;
