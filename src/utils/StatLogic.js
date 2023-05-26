function calculateAccuracy(allStringsShown, allInputStrings) {
  console.log({allStringsShown, allInputStrings})
  if(allStringsShown.length === 0 || allInputStrings.length === 0){
    return { accuracy: 0, correctWords: 0, totalWords: 0 }
  }

  let totalWords = 0;
  let correctWords = 0;

  for (let i = 0; i < allInputStrings.length; i++) {
    const currentWords = allStringsShown[i].split(" ");
    const inputWords = (allInputStrings[i] || "").split(" ");

    totalWords += inputWords.length;

    for (let j = 0; j < inputWords.length; j++) {
      if (inputWords[j] === currentWords[j]) {
        correctWords += 1;
      }
    }
  }

  const accuracy = (correctWords / totalWords) * 100;
  return {accuracy, correctWords, totalWords}
}

const calculateNumberOfWords = (string) => string?.trim().split(" ").length || 0

export { calculateAccuracy, calculateNumberOfWords };