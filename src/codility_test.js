function solution(message, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let words = message.split(" ")
  let finalSentence = []
  let currentLength = 0

  for (let i=0; i<words.length; i++) {
    // currentLength
    if (currentLength < K) {
      let wordLength = words[i].length

      // new length
      currentLength += wordLength // add the word length and test if it is still below K

      if (currentLength === K) { // they are equal, push and break
        finalSentence.push(words[i])
        break
      }

      currentLength +=1 // add the space length

      // push to final sentence
      if (currentLength <= K) {
        finalSentence.push(words[i])
      } else {
        break
      }
    } else {
      break
    }

  }

  return finalSentence.join(" ")
}

console.log(solution("The quick brown fox jumps over the lazy dog", 39))