import { useEffect, useState } from "react";

import {
    calculateAccuracy,
    calculateNumberOfWords,
    calculateWordsPerMinute,
} from "../utils/StatLogic";
import { StyledInput, StyledStage, StyledWord } from "../styles";
import { stringsToType } from "../constants";

const Stage = ({ setIsTyping, timer, setStatistics }) => {
    // console.log({ timer });
    const [currentInputString, setCurrentInputString] = useState("");
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [allInputStrings, setAllInputStrings] = useState([]);

    const currentString = stringsToType[currentStringIndex];

    const handleKeyDown = (event) => {
        setIsTyping(true);
    };

    const handlePaste = (e) => {
        e.preventDefault();
    };

    const resetInputValue = () => setCurrentInputString("");

    const computeAccuracy = () => {
        const inputStrings =
            currentInputString.trim() !== ""
                ? [...allInputStrings, currentInputString.trim()]
                : allInputStrings;

        const stats = calculateAccuracy(
            stringsToType.slice(0, currentStringIndex + 1),
            inputStrings
        );
        const wordsPerMinute = calculateWordsPerMinute(
            stats.totalWords,
            timer.elapsedTime
        );
        setStatistics({ ...stats, wordsPerMinute });
    };

    useEffect(() => {
        // Check if the number of words and characters in the current input string matches that of the current string.
        if (
            calculateNumberOfWords(currentInputString) ===
            calculateNumberOfWords(currentString) &&
            currentInputString.length === currentString.length
        ) {
            setAllInputStrings((prevStrings) => [
                ...prevStrings,
                currentInputString.trim(),
            ]);
            resetInputValue();
            setCurrentStringIndex((index) => (index + 1) % stringsToType.length);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentInputString, allInputStrings]);

    useEffect(() => {
        computeAccuracy();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentStringIndex]);

	useEffect(() => {
		computeAccuracy();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [timer.remainingTime]);

    return (
        <StyledStage>
            <h1>
                {currentString.split(" ").map((word, index) => (
                    <StyledWord alternate={index % 2 === 0}>{word}</StyledWord>
                ))}
            </h1>
            <StyledInput
                value={currentInputString}
                type="text"
                placeholder="Begin typing to start timer..."
                onChange={(e) => setCurrentInputString(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={timer.remainingTime === 0}
                onPaste={handlePaste}
            />
        </StyledStage>
    );
};

export default Stage;
