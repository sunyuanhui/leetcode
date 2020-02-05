/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((x, y) => x - y);

    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        let a = nums[i];
        if (a > 0) {
            break;
        }
        if (i > 0 && a === nums[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let b = nums[j];
            let c = nums[k];
            if (a < 0 && b < 0 && c < 0) {
                break;
            }
            if (a + b + c === 0) {
                result.push([a, b, c]);
                while (j < k && b === nums[j + 1]) {
                    j++;
                }
                while (j < k && c === nums[k + 1]) {
                    k--;
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
        }
    }
    return result;
};
module.exports = threeSum;
