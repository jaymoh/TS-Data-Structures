// returns the length of the longest binary gap of an integer's binary representation
function solution(N) { // Big O: O(n)
  let gaps = []
  let hasOne = false
  let gap = 0

  // N is an integer within the range [1..2,147,483,647].
  if (N >= 1 && N <= 2147483647) {
    // get binary string
    let binary = N.toString(2)
    // split binary string into array of binary digits
    let binaryDigits = binary.split('')
    // iterate through binary digits
    for (let i = 0; i < binaryDigits.length; i++) {
      if (binaryDigits[i] === '1') {
        if (!hasOne) { // executes for the first occurrence of a 1
          hasOne = true
          // continue to the next iteration
          continue
        }
        gaps.push(gap)
        // reset gap
        gap = 0
        // continue to the next iteration
        continue
      }
      // increment gap if binary digit is 0
      gap++
    }
  }

  return gaps.length > 0 ? Math.max(...gaps) : 0
}

// test the solution
console.log(solution(9)) // 2
console.log(solution(529)) // 4
console.log(solution(20)) // 1
console.log(solution(15)) // 0
console.log(solution(32)) // 0
console.log(solution(2147483649)) // 0 out of bounds
console.log(solution(-4)) // 0 out of bounds
