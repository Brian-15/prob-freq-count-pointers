// add whatever parameters you deem necessary
/**
 * Given a sorted array of integers and a target average, determine if there
 * is a pair of values in the array where the average of the pair equals the target average.
 * There may be more than one pair that matches the average target.
 * 
 * Time complexity: O(N)
 */
function averagePair(arr, targetAvg) {
  if (!arr.length) return false;

  let [leftIdx, rightIdx] = [0, arr.length - 1];

  while (leftIdx < rightIdx) {
    const [left, right] = [arr[leftIdx], arr[rightIdx]];
    if (left > targetAvg || right < targetAvg) return false;
    const avg = (left + right) / 2;
    if (avg === targetAvg) return true;
    else if (avg < targetAvg) leftIdx++;
    else rightIdx--;
  }
  return false;
}

module.exports = averagePair;