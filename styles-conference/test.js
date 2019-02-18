const palindrome = require('./algorithm1');

test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test('1 is a palindrome', () => {
  expect(palindrome(1)).toBeTruthy();
});

test('2 is not a palindrome', () => {
  expect(palindrome(2)).toBeFalsy();
});

test('3 is not a palindrome', () => {
  expect(palindrome(3)).toBeFalsy();
});

test('4 is not a palindrome', () => {
  expect(palindrome(4)).toBeFalsy();
});

test('5 a palindrome', () => {
  expect(palindrome(5)).toBeTruthy();
});

test('6 is not a palindrome', () => {
  expect(palindrome(6)).toBeFalsy();
});

test('7 a palindrome', () => {
  expect(palindrome(7)).toBeTruthy();
});
