function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let filters = 0;
  let initialPollution = 0;

  // calculate initial pollution
  for (let i=0; i<A.length; i++) {
    initialPollution += A[i]
  }

  // sort the array in descending order so that we can work with larger numbers first
  A.sort((a, b) => b-a)

  // calculate half pollution
  let halfPollution = initialPollution / 2

  for (let j = 0; j < A.length; j++) {
    if (initialPollution > halfPollution) {
      filters += 1

      let halved = A[j] / 2

      initialPollution = initialPollution - A[j]
      initialPollution = initialPollution + halved
      if (halved/2 > 4) { // reduce it further
        filters += 1
        initialPollution = initialPollution - halved
        initialPollution = initialPollution + halved/2
      }
    } else {
      break
    }
  }

  return filters
}

console.log(solution([3, 0, 5])); // 3

// calculate number of filters needed to half pollution
function numberOfFilters(A) {

}