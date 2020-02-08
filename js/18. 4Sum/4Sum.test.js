const fourSum = require('./4Sum');

test('4sum 1', () => {
  const nums = [1, 0, -1, 0, -2, 2];
  const target = 0;
  const solution = [ [-1, 0, 0, 1], [-2, -1, 1, 2], [-2, 0, 0, 2] ].sort();
  expect(fourSum(nums, target).sort()).toEqual(solution);
});

test('4sum 2', () => {
  const nums = [-3,-2,-1,0,0,1,2,3];
  const target = 0;
  const solution = [[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]].sort();
  expect(fourSum(nums, target).sort()).toEqual(solution);
});

test('4sum 3', () => {
  const nums = [-1,-5,-5,-3,2,5,0,4];
  const target = -7;
  const solution = [[-5,-5,-1,4],[-5,-3,-1,2]].sort();
  expect(fourSum(nums, target).sort()).toEqual(solution);
});
