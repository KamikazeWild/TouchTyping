import {useEffect, useState} from "react";

import {calculateAccuracy, calculateNumberOfWords, calculateWordsPerMinute} from "../utils/StatLogic";
import {StyledInput, StyledStage, StyledStatBox, StyledStat} from "../styles";
import {stringsToType} from "../constants";


const Stage = ({ setIsTyping, timer, setStatistics }) => {
    console.log({timer})
    const [currentInputString, setCurrentInputString] = useState('');
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [allInputStrings, setAllInputStrings] = useState([]);

    const currentString = stringsToType[currentStringIndex];

    const handleKeyDown = (event) => {
        setIsTyping(true);
    };

    const resetInputValue = () => setCurrentInputString('');

    const computeAccuracy = () => {
        const inputStrings = currentInputString.trim() !== '' ? [...allInputStrings, currentInputString.trim()] : allInputStrings;
        const stats = calculateAccuracy(stringsToType.slice(0, currentStringIndex+1), inputStrings);
        const wordsPerMinute = calculateWordsPerMinute(stats.totalWords, timer.elapsedTime)
        setStatistics({...stats, wordsPerMinute});
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

    useEffect(() => {
        computeAccuracy()
    }, [timer.remainingTime])

    return (
        <StyledStage>
            <h1>{currentString}</h1>
            <StyledInput
                value={currentInputString}
                type="text"
                onChange={(e) => setCurrentInputString(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={timer.remainingTime === 0}
            />
        </StyledStage>
    );
};

export default Stage;
