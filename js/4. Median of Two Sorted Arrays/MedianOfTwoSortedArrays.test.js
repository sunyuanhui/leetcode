const findMedianSortedArrays = require('./MedianOfTwoSortedArrays');

test('median of two sorted arrays 1', () => {
  const nums1 = [1, 3];
  const nums2 = [2];
  expect(findMedianSortedArrays(nums1, nums2)).toBe(2.0);
});

test('median of two sorted arrays 2', () => {
  const nums1 = [1, 2];
  const nums2 = [3, 4];
  expect(findMedianSortedArrays(nums1, nums2)).toBe(2.5);
});

test('median of two sorted arrays 3', () => {
  const nums1 = [];
  const nums2 = [3, 4];
  expect(findMedianSortedArrays(nums1, nums2)).toBe(3.5);
});

test('median of two sorted arrays 4', () => {
  const nums1 = [1, 2];
  const nums2 = [];
  expect(findMedianSortedArrays(nums1, nums2)).toBe(1.5);
});

test('median of two sorted arrays 5', () => {
  const nums1 = [1];
  const nums2 = [3];
  expect(findMedianSortedArrays(nums1, nums2)).toBe(2);
});

test('median of two sorted arrays 6', () => {
  const nums1 = [1, 3, 4, 5, 6];
  const nums2 = [2];
  expect(findMedianSortedArrays(nums1, nums2)).toBe(3.5);
});

test('median of two sorted arrays 7', () => {
  const nums1 = [1, 3, 4, 5, 6];
  const nums2 = [7, 8];
  expect(findMedianSortedArrays(nums1, nums2)).toBe(5.0);
});

test('median of two sorted arrays 8', () => {
  const nums1 = [1, 3, 4, 6, 7];
  const nums2 = [2, 5, 8, 9];
  expect(findMedianSortedArrays(nums1, nums2)).toBe(5.0);
});

test('median of two sorted arrays 9', () => {
  const nums1 = [1, 3, 6];
  const nums2 = [4, 5];
  expect(findMedianSortedArrays(nums1, nums2)).toBe(4.0);
});

test('median of two sorted arrays 10', () => {
  const nums1 = [1];
  const nums2 = [];
  expect(findMedianSortedArrays(nums1, nums2)).toBe(1.0);
});

test('median of two sorted arrays 11', () => {
  const nums1 = [1, 3, 4, 6, 7];
  const nums2 = [3, 5];
  expect(findMedianSortedArrays(nums1, nums2)).toBe(4.0);
});

test('median of two sorted arrays 12', () => {
  const nums1 = [1, 3, 4, 6];
  const nums2 = [3, 5];
  expect(findMedianSortedArrays(nums1, nums2)).toBe(3.5);
});

test('median of two sorted arrays 13', () => {
  const nums1 = [];
  const nums2 = [1, 2, 3, 4];
  expect(findMedianSortedArrays(nums1, nums2)).toBe(2.5);
});

test('median of two sorted arrays 14', () => {
  const nums1 = [4, 5, 6, 8, 9];
  const nums2 = [];
  expect(findMedianSortedArrays(nums1, nums2)).toBe(6.0);
});

test('median of two sorted arrays 15', () => {
  const nums1 = [3, 4, 5];
  const nums2 = [1, 2];
  expect(findMedianSortedArrays(nums1, nums2)).toBe(3.0);
});
