import {useEffect, useState} from "react";

import {calculateAccuracy, calculateNumberOfWords} from "../utils/StatLogic";

const stringsToType = [
	"Curabitur sit amet",
	"Vestibulum dapibus mauris",
	"Sed tristique, purus",
	"Vestibulum ante ipsum",
	"Donec quis est",
	"Maecenas cursus, mauris",
	"Aliquam erat volutpat",
	"Donec in pellentesque",
	"Nulla eget purus",
	"Mauris eget massa",
	"Donec vehicula quam",
	"Cras egestas magna",
	"Suspendisse semper nulla",
	"Praesent vitae risus",
	"Vivamus vitae dolor",
	"Aliquam eget eros",
	"Morbi ac convallis",
	"Proin quis nisl",
	"Fusce ornare nulla",
	"Maecenas sodales metus"
];


const Stage = ({ setIsTyping, timer }) => {
  const [currentInputString, setCurrentInputString] = useState('');
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [allInputStrings, setAllInputStrings] = useState([]);
  const [statistics, setStatistics] = useState({ accuracy: 0, correctWords: 0, totalWords: 0 });

  const currentString = stringsToType[currentStringIndex];

  const handleKeyDown = (event) => {
    setIsTyping(true);
    if (event.keyCode === 32 || event.which === 32) {
      computeAccuracy();
    }
  };

  const resetInputValue = () => setCurrentInputString('');

  const computeAccuracy = () => {
    const inputStrings = currentInputString.trim() !== '' ? [...allInputStrings, currentInputString.trim()] : allInputStrings;
    const stats = calculateAccuracy(stringsToType.slice(0, currentStringIndex+1), inputStrings);
    setStatistics(stats);
  };

  useEffect(() => {
    // Check if the number of words and characters in the current input string matches that of the current string.
    if (calculateNumberOfWords(currentInputString) === calculateNumberOfWords(currentString) && currentInputString.length === currentString.length) {
      setAllInputStrings(prevStrings => [...prevStrings, currentInputString.trim()]);
      resetInputValue();
      setCurrentStringIndex((index) => (index + 1) % stringsToType.length);
    }
  }, [currentInputString]);

  useEffect(() => {
    computeAccuracy();
  }, [currentStringIndex]);

  return (
    <div>
      <h1>{currentString}</h1>
      <div>
        <input
          value={currentInputString}
          type="text"
          onChange={(e) => setCurrentInputString(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={timer === 0}
        />
      </div>
      <p>Accuracy: {statistics.accuracy.toFixed(2)}, Correct Words: {statistics.correctWords}, Total Words: {statistics.totalWords}</p>
    </div>
  );
};

export default Stage;
