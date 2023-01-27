// reverse a string keeping characters that are not a letter in the same place
function reverseOnlyLetters(s) {
  let letters = [];
  let result = [];

  for (let i = 0; i < s.length; i++) { // first extract letters
    if (s[i].toLowerCase() !== s[i].toUpperCase() || s[i].codePointAt(0) > 127) {
      letters.push(s[i]);
    }
  }

  for (let j = 0; j < s.length; j++) {
    if (s[j].toLowerCase() !== s[j].toUpperCase() || s[j].codePointAt(0) > 127) {
      result.push(letters.pop());
    } else {
      result.push(s[j]);
    }
  }
  return result.join('');
}

// find the maximum sum of two elements in an array less than a given number K
function twoSumLessThanK(arr, K) {
  let max = -1; // default max value
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] < K) {
        max = Math.max(max, arr[i] + arr[j]); // replace max if condition is met
      }
    }
  }
  return max;
}