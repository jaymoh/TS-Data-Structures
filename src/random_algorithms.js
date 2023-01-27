// find the unpaired element in the array
function findUnpairedElement(arr) { // Big O(N)
  let unpaired = 0;

  for (let i = 0; i < arr.length; i++) {
    unpaired ^= arr[i]; // XOR
  }

  return unpaired;
}

function findUnpairedElementLongWay(A) { // Big O(N^2)
  let holder = []
  for (let i = 0; i < A.length; i++) {
    if (holder.length === 0) { // push if it's empty
      holder.push(A[i])
      continue
    }
    // find index of element if it exists
    let index = holder.findIndex(element => element === A[i])
    if (index !== -1) {
      // remove element from array
      holder.splice(index, 1)
      continue
    }
    // just push
    holder.push(A[i])
  }

  return holder[0]
}

// minimal number of jumps to a position equal or greater than Y
function maxJumps(X, Y, D) { // Big O(N)
  let jumps = 0;
  let current = X;

  while (current < Y) {
    jumps++;
    current += D;
  }

  return jumps;
}

// using simple Maths
function maxJumpsFast(X, Y, D) { // Big O(1)
  let jumps = (Y - X) / D

  return Math.ceil(jumps)
}


// find the missing element in an array of integers
function findMissingElement(A) { // Big O(N)
  let sum = 0;
  let expectedSum = (A.length + 1) * (A.length + 2) / 2;

  for (let i = 0; i < A.length; i++) {
    sum += A[i];
  }

  return expectedSum - sum;
}

function findMissingSolution(A) {
  // sort the array
  A.sort((a, b) => a - b) // Big O(NlogN)

  let missing = 0;

  for (i = 0; i < A.length; i++) { // Big O(N)
    if (i + 1 === A[i]) {
      continue
    }
    missing = i + 1
    break
  }

  return missing
}

// find the smallest difference between sum of array parts
function solutionLong(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let splits = []

  for (let i = 0; i < A.length; i++) {
    if (i + 1 === A.length) {
      break
    }

    let left = sumArray(A, 0, i + 1)
    let right = sumArray(A, i + 1, A.length)

    splits.push(Math.abs(left - right))
  }

  return Math.min(...splits)
}

function sumArray(A, start, end) {
  let total = 0
  for (let i = start; i < end; i++) {
    total += A[i]
  }

  return total
}

// find the smallest difference between sum of array parts
function smallestDifferenceBetweenSumArrayParts(A) {
  let sumRight = 0;

  for (let i = 1; i < A.length; i++) {
    sumRight += A[i];
  }

  let sumLeft = A[0]
  let minDiff = Math.abs(sumLeft - sumRight)

  for (let j = 1; j < A.length; j++) {
    if (Math.abs(sumLeft - sumRight) < minDiff) {
      minDiff = Math.abs(sumLeft - sumRight)
    }
    sumLeft += A[j]
    sumRight -= A[j]
  }

  return minDiff
}

console.log(smallestDifferenceBetweenSumArrayParts([3, 1, 2, 4, 3])) // 1