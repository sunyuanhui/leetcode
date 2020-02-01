const isMatch = require('./RegularExpressionMatching');

test('regular expression matching 1', () => {
  const s = "aa";
  const p = "a";
  expect(isMatch(s, p)).toBe(false);
});

test('regular expression matching 2', () => {
  const s = "aa";
  const p = "a*";
  expect(isMatch(s, p)).toBe(true);
});

test('regular expression matching 3', () => {
  const s = "aa";
  const p = ".*";
  expect(isMatch(s, p)).toBe(true);
});

test('regular expression matching 4', () => {
  const s = "ab";
  const p = ".*";
  expect(isMatch(s, p)).toBe(true);
});

test('regular expression matching 5', () => {
  const s = 'mississippi';
  const p = 'mis*is*p*.';
  expect(isMatch(s, p)).toBe(false);
});

test('regular expression matching 6', () => {
  const s = "aab";
  const p = "c*a*b";
  expect(isMatch(s, p)).toBe(true);
});

test('regular expression matching 7', () => {
  const s = "aab";
  const p = "a*c*b";
  expect(isMatch(s, p)).toBe(true);
});

test('regular expression matching 8', () => {
  const s = "aaa";
  const p = "ab*a*c*a";
  expect(isMatch(s, p)).toBe(true);
});

test('regular expression matching 9', () => {
  const s = "aaa";
  const p = "a*a";
  expect(isMatch(s, p)).toBe(true);
});

test('regular expression matching 10', () => {
  const s = "aaa";
  const p = "a*aaa";
  expect(isMatch(s, p)).toBe(true);
});

test('regular expression matching 11', () => {
  const s = "aaa";
  const p = "a*aaaa";
  expect(isMatch(s, p)).toBe(false);
});

test('regular expression matching 12', () => {
  const s = "aaa";
  const p = "a*.";
  expect(isMatch(s, p)).toBe(true);
});

test('regular expression matching 13', () => {
  const s = "aaa";
  const p = "a*..";
  expect(isMatch(s, p)).toBe(true);
});

test('regular expression matching 14', () => {
  const s = "aaa";
  const p = "a*...";
  expect(isMatch(s, p)).toBe(true);
});

test('regular expression matching 15', () => {
  const s = "aaa";
  const p = "a*....";
  expect(isMatch(s, p)).toBe(false);
});

test('regular expression matching 16', () => {
  const s = "aaab";
  const p = "a*..";
  expect(isMatch(s, p)).toBe(true);
});

test('regular expression matching 17', () => {
  const s = "aaa";
  const p = "...a*";
  expect(isMatch(s, p)).toBe(true);
});

test('regular expression matching 18', () => {
  const s = "aaa";
  const p = "a*..b*";
  expect(isMatch(s, p)).toBe(true);
});

test('regular expression matching 19', () => {
  const s = "aaa";
  const p = "....a*";
  expect(isMatch(s, p)).toBe(false);
});

test('regular expression matching 20', () => {
  const s = "baaa";
  const p = "..a*";
  expect(isMatch(s, p)).toBe(true);
});

test('regular expression matching 21', () => {
  const s = "baaa";
  const p = ".....a*";
  expect(isMatch(s, p)).toBe(false);
});

test('regular expression matching 22', () => {
  const s = "";
  const p = ".*";
  expect(isMatch(s, p)).toBe(true);
});

test('regular expression matching 23', () => {
  const s = "aasdfasdfasdfasdfas";
  const p = "aasdf.*asdf.*asdf.*asdf.*s";
  expect(isMatch(s, p)).toBe(true);
});
