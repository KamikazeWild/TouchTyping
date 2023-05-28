const words = [
    "cat",
    "dog",
    "tree",
    "book",
    "bird",
    "jump",
    "flower",
    "happy",
    "sun",
    "river",
    "mountain",
    "butterfly",
    "whisper",
    "courage",
    "mystery",
    "chocolate",
    "adventure",
    "serendipity",
    "bedsheet",
    "cellphone",
    "computer",
    "effervescent"
    // Add more simple words here
];

function generateRandomStrings(numStrings) {
  const randomStrings = [];

  for (let i = 0; i < numStrings; i++) {
    let word1, word2, word3;

    do {
      word1 = words[Math.floor(Math.random() * words.length)];
      word2 = words[Math.floor(Math.random() * words.length)];
      word3 = words[Math.floor(Math.random() * words.length)];
    } while (word1 === word2 || word2 === word3 || word1 === word3);

    const randomString = `${word1} ${word2} ${word3}`;
    randomStrings.push(randomString);
  }

  return randomStrings;
}

// Generate 300 random 3-word strings
const stringsToType = generateRandomStrings(300);

export {
    stringsToType
}