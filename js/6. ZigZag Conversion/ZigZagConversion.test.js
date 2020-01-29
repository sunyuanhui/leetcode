const convert = require('./ZigZagConversion');

test('zig zag conversion 1', () => {
  const s = 'PAYPALISHIRING';
  const numRows = 3;
  expect(convert(s, numRows)).toBe('PAHNAPLSIIGYIR');
});

test('zig zag conversion 2', () => {
  const s = 'PAYPALISHIRING';
  const numRows = 4;
  expect(convert(s, numRows)).toBe('PINALSIGYAHRPI');
});

test('zig zag conversion 3', () => {
  const s = 'LEETCODEISHIRING';
  const numRows = 3;
  expect(convert(s, numRows)).toBe('LCIRETOESIIGEDHN');
});

test('zig zag conversion 4', () => {
  const s = 'LEETCODEISHIRING';
  const numRows = 4;
  expect(convert(s, numRows)).toBe('LDREOEIIECIHNTSG');
});

test('zig zag conversion 5', () => {
  const s = 'A';
  const numRows = 1;
  expect(convert(s, numRows)).toBe('A');
});
