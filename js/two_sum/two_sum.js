/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let tmp = {};
    nums.forEach((num, index) => {
        if (tmp[num]) {
            tmp[num] = [...tmp[num], index];
            console.log(tmp + '\n');
        } else {
            tmp[num] = index;
        }
    })
    
    for (let num1 in tmp) {
        let num2;
        if (num1 instanceof Array) {
            num2 = target - num1[0];
            console.log(num2 + '\n');
        } else {
            num2 = target - num1;
        }

        if (tmp[num2]) {
            if (tmp[num2] instanceof Array) {
                console.log(tmp[num2][0] + '\n');
                return [tmp[num1], tmp[num2][0]];
            }
            return [tmp[num1], tmp[num2]];
        }
    }
    return [];
};
module.exports = twoSum;