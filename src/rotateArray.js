// rotate an array a given number of times
function rotateArray(A, K) { // Big O(N)
  let result = [];
  for (let i = 0; i < A.length; i++) {
    let index = (i + K) % A.length;
    result[index] = A[i];
  }
  return result;
}

function solution(A, K) { // Big O(N)
  let len = A.length
  for (let i=1; i<=K; i++) {
    let temp = A[0]

    for (let j = 0; j<len; j++) { // Big O(N)
      if (j === len-1){
        A[0] = temp
      } else{
        let temp2 = A[j+1]
        A[j+1] = temp
        temp = temp2
      }
    }
  }
  return A;
}

console.log(solution([1, 2, 3, 4, 5], 4)); // [5, 1, 2, 3, 4]
console.log(rotateArray([1, 2, 3, 4, 5], 4)); // [5, 1, 2, 3, 4]