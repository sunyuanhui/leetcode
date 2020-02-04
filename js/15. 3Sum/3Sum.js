/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    let resultStrs = [];
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j ++) {
            let a = nums[i];
            let b = nums[j];
            const c = 0 - a - b;
            const index = nums.indexOf(c);
            if (index === -1 || index === i || index === j) {
                continue;
            }

            let r = [a, b, c].sort((x, y) => x - y);
            if (!resultStrs.includes(r.toString())) {
                result.push(r);
                resultStrs.push(r.toString());
            }
        }
    }
    return result;
};
module.exports = threeSum;
