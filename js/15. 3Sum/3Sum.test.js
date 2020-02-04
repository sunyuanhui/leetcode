const threeSum = require('./3Sum');

test('3sum 1', () => {
  const nums = [-1, 0, 1, 2, -1, -4];
  const solution = [ [-1, 0, 1], [-1, -1, 2] ];
  expect(threeSum(nums)).toEqual(solution);
});

test('3sum 2', () => {
  const nums = [0, 0];
  const solution = [];
  expect(threeSum(nums)).toEqual(solution);
});

test('3sum 3', () => {
  const nums = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
  const solution = [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]].sort();
  expect(threeSum(nums).sort()).toEqual(solution);
});
