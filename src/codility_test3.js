// there are P[K] people and S[K] seats in the K-th car for K in range [0, N-1].
// find the minimum number of cars required to transport all people.
function minimumCars(P, S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let cars = 0;
  let people = 0
  let carSeats = 0;

  // sum of people
  for (i = 0; i<P.length; i++) {
    people += P[i]
  }

  // sum of seats
  for (i = 0; i<S.length; i++) {
    carSeats += S[i]

  }
  // todo: ran out of time

  return Math.ceil(carSeats/people)
}


console.log(minimumCars([4,4,2,4], [5,5,2,5])); // 3