// add whatever parameters you deem necessary
/** Accepts two strings: a messsage, and some letters
 *  This function should return true if the message can be built with the letters
 *  you are given; otherwise, it should return false.
 * 
 * assume there are only lowercase letters and no space or special characters 
 * in both the message and the letters.
 */

function constructNote(message, letters) {
  if (message.length === 0) return true;
  if (message.length > letters.length) return false;
  const letterFreq = getCharFreq(letters);

  for (const letter of message) {
    if (!letterFreq[letter] || letterFreq[letter] === 0) return false;
    letterFreq[letter] -= 1;
  }

  return true;
}

function getCharFreq(str) {
  const freq = {};

  for (let char of str) {
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  return freq;
}

module.exports = constructNote;