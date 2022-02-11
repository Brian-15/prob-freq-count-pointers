// add whatever parameters you deem necessary
/**
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 */
function sameFrequency(num1, num2) {
  const freq1 = getFrequency(String(num1));

  for (const digit of String(num2)) {
    if (!freq1[digit] || freq1[digit] === 0) return false;
    freq1[digit]--;
  }

  return true;
}

function getFrequency(str) {
  const freq = {};
  for (const char of str) {
    freq[char] = freq[char] ? freq[char] + 1 : 1;
  }
  return freq;
}

module.exports = sameFrequency;