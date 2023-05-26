function calculateAccuracy(allStringsShown, allInputStrings) {
	if(allStringsShown.length === 0 || allInputStrings.length === 0){
		return 0
	}

	let totalWords = 0;
	let correctWords = 0;
	console.log({allStringsShown, allInputStrings})

	for (let i = 0; i < allStringsShown.length; i++) {
		const currentWords = allStringsShown[i].split(" ");
		const inputWords = (allInputStrings[i] || "").split(" ");

		totalWords += inputWords.length;

		for (let j = 0; j < inputWords.length; j++) {
			if (inputWords[j] === currentWords[j]) {
				correctWords += 1;
			}
		}
	}

	// Return the accuracy as a percentage
	return (correctWords / totalWords) * 100;
}

export { calculateAccuracy };
