// add whatever parameters you deem necessary
/**
 * accepts an array of non-zero integers.
 * Separate the positive integers to the left and the negative integers to the right.
 * The positive numbers and negative numbers need not be in sorted order.
 * The problem should be done in place (in other words, do not build a copy of the input array).
 */
function separatePositive(arr) {
  if (!arr.length) return [];
  let [left, right] = [0, arr.length - 1];

  while (left < right) {
    if (arr[left] > 0 && arr[right] < 0) {
      left++;
      right--;
      continue;
    } else if (arr[left] < 0 && arr[right] > 0) {
      // swap values
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    } else if (arr[left] < 0) {
      right--;
    } else if (arr[right] > 0) {
      left++;
    }
  }

  return arr;
}

module.exports = separatePositive;