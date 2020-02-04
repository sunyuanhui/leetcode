const threeSum = require('./3Sum');

test('3sum 1', () => {
  const nums = [-1, 0, 1, 2, -1, -4];
  const solution = [ [-1, 0, 1], [-1, -1, 2] ];
  expect(threeSum(nums)).toEqual(solution);
});
