// return the smallest positive integer not in the array
function solution(A) { // Big O(N)
  let smallest = 1;
  // sort the array
  A.sort((a, b) => a - b); // Big O(N log N)
  for (let i = 0; i < A.length; i++) {
    if (A[i] === smallest) {
      // if the current element is the smallest, increment the smallest
      smallest++;
    } else if (A[i] > smallest) {
      // if the current element is greater than the smallest, we can return the smallest
      return smallest;
    }
  }
  return smallest;
}

// test solution
console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([-1, -3])); // 1
console.log(solution([1, 2, 3])); // 4

// I thought this was a bit tricky, but I think I got it.
// I was initially thinking of using a hash table, but I realized that it would be more efficient to sort the array first.
// We can then iterate through the array and check if the current element is the smallest.
// If it is, we increment the smallest and continue. If it is not, we can return the smallest. So we can do this in O(n) time. Sounds good.