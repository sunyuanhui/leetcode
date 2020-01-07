const longestPalindrome = require('./LongestPalindromicSubstring');

test('longest palindromic substring 1', () => {
  const s = 'babad';
  expect(longestPalindrome(s)).toBe('bab');
});

test('longest palindromic substring 2', () => {
  const s = 'cbbd';
  expect(longestPalindrome(s)).toBe('bb');
});

test('longest palindromic substring 3', () => {
  const s = 'cbbdbb';
  expect(longestPalindrome(s)).toBe('bbdbb');
});

test('longest palindromic substring 4', () => {
  const s = 'c';
  expect(longestPalindrome(s)).toBe('c');
});

test('longest palindromic substring 5', () => {
  const s = 'cbdbccbd';
  expect(longestPalindrome(s)).toBe('dbccbd');
});

test('longest palindromic substring 6', () => {
  const s = 'cbdbcfff';
  expect(longestPalindrome(s)).toBe('cbdbc');
});

test('longest palindromic substring 7', () => {
  const s = 'babab';
  expect(longestPalindrome(s)).toBe('babab');
});

test('longest palindromic substring 8', () => {
  const s = 'bb';
  expect(longestPalindrome(s)).toBe('bb');
});

test('longest palindromic substring 9', () => {
  const s = 'bbb';
  expect(longestPalindrome(s)).toBe('bbb');
});

test('longest palindromic substring 10', () => {
  const s = 'abcdefghiihgfedcba';
  expect(longestPalindrome(s)).toBe('abcdefghiihgfedcba');
});

test('longest palindromic substring 11', () => {
  const s = 'abccbaab';
  expect(longestPalindrome(s)).toBe('abccba');
});

test('longest palindromic substring 12', () => {
  const s = 'abcdefffffff';
  expect(longestPalindrome(s)).toBe('fffffff');
});
