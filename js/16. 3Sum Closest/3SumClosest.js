/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);

    let result = undefined;
    for (let i = 0; i < nums.length - 2; i++) {
        let jResult = undefined
        for (let j = i + 1; j < nums.length - 1; j++) {
            let kResult = undefined;
            for (let k = j + 1; k < nums.length; k++) {
                let r = nums[i] + nums[j] + nums[k];
                if (r === target) {
                    return r;
                }

                kResult = calc(target, r, kResult);
                if (kResult !== r) {
                    break;
                }
            }

            jResult = calc(target, kResult, jResult);
            if (jResult !== kResult) {
                break;
            }
        }

        result = calc(target, jResult, result);
    }
    return result;
};
var calc = function(target, newResult, oldResult) {
    let n = Math.abs(target - newResult);
    let o = Math.abs(target - oldResult);
    if (oldResult === undefined || n < o) {
        return newResult;
    } else {
        return oldResult;
    }
};
module.exports = threeSumClosest;
