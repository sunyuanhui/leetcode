/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let result = undefined;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let r = nums[i] + nums[j] + nums[k];
                let n = Math.abs(target - r);
                let o = Math.abs(target - result);
                if (result === undefined || n < o) {
                    result = r;
                }
            }
        }
    }
    return result;
};
module.exports = threeSumClosest;
