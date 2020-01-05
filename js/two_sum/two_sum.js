/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let tmp = {};
    nums.forEach((num, index) => {
        let numIndex = tmp[num];
        tmp[num] = numIndex === undefined ? [index] : [...numIndex, index];
    })
    
    for (let num1 in tmp) {
        let num2 = target - num1;
        if (tmp[num2]) {
            if (num1 == num2) {
                return [tmp[num1][0], tmp[num1][1]];
            }
            return [tmp[num1][0], tmp[num2][0]];
        }
    }
    return [];
};
module.exports = twoSum;