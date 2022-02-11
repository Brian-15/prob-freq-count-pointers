// add whatever parameters you deem necessary
/**
 * Given an array of integers, and a number, find the number of pairs of integers
 * in the array whose sum is equal to the second parameter.
 * You can assume that there will be no duplicate values in the array.
 */
function countPairs(nums, targetSum) {
  if (!nums.length) return 0;
  const seen = {};
  let count = 0;

  for (let num of nums) {
    if (seen[targetSum - num]) {
      count++;
      continue;
    }
    if (!seen[num]) {
      seen[num] = true;
    }
  }

  return count;
}

module.exports = countPairs;