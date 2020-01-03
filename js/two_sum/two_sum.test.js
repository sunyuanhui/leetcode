const twoSum = require('./two_sum');

test('two sum 1', () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  expect(twoSum(nums, target)).toStrictEqual([0, 1]);
});

test('two sum 2', () => {
  const nums = [3, 3];
  const target = 6;
  expect(twoSum(nums, target)).toStrictEqual([0, 1]);
});