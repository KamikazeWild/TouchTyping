import {useEffect, useState} from "react";

import {calculateAccuracy, calculateNumberOfWords} from "../utils/StatLogic";
import {StyledInput, StyledStage, StyledStatBox, StyledStat} from "../styles";

const stringsToType = [
  "asd fjk l;",
  "asdf j; kl",
  "asd f; jkl",
  "as; djk l",
  "asd; fj k",
  "as d fjk;",
  "as;df jkl",
  "asd jkl; f",
  "as df j; kl",
  "a; sdfj kl",
  "a;dfj kls",
  "as; dj fkl",
  "as; dfj kl",
  "asdf klj;",
  "as; fj kl",
  "asdfj ;kl",
  "asd jkl; f",
  "asf ; jkl",
  "asdf ;jkl",
  "asd fkl; j"
];


const Stage = ({ setIsTyping, timer, children }) => {
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
        <StyledStage>
            <h1>{currentString}</h1>
            <StyledInput
                value={currentInputString}
                type="text"
                onChange={(e) => setCurrentInputString(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={timer === 0}
            />
            <StyledStatBox>
                {children}
                <StyledStat>Accuracy: {statistics.accuracy.toFixed(2)}</StyledStat>
                <StyledStat> Correct Words: {statistics.correctWords}</StyledStat>
                <StyledStat>Total Words: {statistics.totalWords}</StyledStat>
                {/*{timer === 0 ? <StyledStat>Correct WPM: {statistics.correctWordsPerMinute}</StyledStat> : null}*/}
            </StyledStatBox>
        </StyledStage>
    );
};

export default Stage;
