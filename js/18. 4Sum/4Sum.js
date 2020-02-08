/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (nums.length < 4) {
        return [];
    }
    nums.sort((a, b) => a - b);
    
    let result = [];
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let k = j + 1;
            let m = nums.length - 1;
            while (k < m) {
                let sum = nums[i] + nums[j] + nums[k] + nums[m];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[k], nums[m]])
                    while (k < m && nums[k] === nums[k + 1]) {
                        k++;
                    }
                    k++;
                    while (k < m && nums[m - 1] === nums[m]) {
                        m--;
                    }
                    m--;
                } else if (sum > target) {
                    while (k < m && nums[m - 1] === nums[m]) {
                        m--;
                    }
                    m--;
                } else {
                    while (k < m && nums[k] === nums[k + 1]) {
                        k++;
                    }
                    k++;
                }
            }
            while (j < nums.length - 2 && nums[j] === nums[j + 1]) {
                j++;
            }
        }
        while (i < nums.length - 3 && nums[i] === nums[i + 1]) {
            i++;
        }
    }
    return result;
};
module.exports = fourSum;
