const maxArea = require('./ContainerWithMostWater');

test('container with most water 1', () => {
  const num = [1,8,6,2,5,4,8,3,7];
  expect(maxArea(num)).toBe(49);
});

