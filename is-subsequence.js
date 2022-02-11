// add whatever parameters you deem necessary
/**
 * takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
 * In other words, the function should check whether the characters in the first string appear somewhere in the second string,
 * without their order changing.
 */
function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;

  let idx1 = 0, count = 0;

  for (const letter of str2) {
    if (str1[idx1] === letter) {
      count++;
      idx1++;
    }
  }
  return count === str1.length;
}

module.exports = isSubsequence;