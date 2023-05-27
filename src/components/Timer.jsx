import React, { useEffect, useState } from "react";
import { StyledSelect, StyledTime, StyledTimer, StyledButton } from "../styles";

const Timer = ({ isTyping, setIsTyping, timer: { elapsedTime, remainingTime }, setTimer, children }) => {
    const minutes = Math.floor((remainingTime / 60) % 60);
    const seconds = remainingTime % 60;

    const [selectedTime, setSelectedTime] = useState(30); // Track the selected time value

    const setClock = (e) => {
        setSelectedTime(parseInt(e.target.value)); // Update the selected time value
        setTimer({ remainingTime: parseInt(e.target.value), elapsedTime: 0 });
        setIsTyping(false);
    };

    const resetTimer = () => {
        setTimer({ remainingTime: selectedTime, elapsedTime: 0 }); // Reset the timer to the selected time
        setIsTyping(false);
    };

    useEffect(() => {
        let interval;

        if (isTyping && remainingTime > 0) {
            interval = setInterval(() => {
                setTimer((prevVal) => ({
                    remainingTime: prevVal.remainingTime - 1,
                    elapsedTime: prevVal.elapsedTime + 1,
                }));
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isTyping, remainingTime, setTimer]);

    return (
        <StyledTimer>
            <h2>Time Duration</h2>
            <StyledSelect name="time" onChange={(e) => setClock(e)}>
                <option value="30">30 seconds</option>
                <option value="60">1 minute</option>
                <option value="120">2 minutes</option>
                <option value="300">5 minutes</option>
            </StyledSelect>
            <StyledTime>
                {children} {"0" + minutes + ":" + (seconds >= 10 ? seconds : "0" + seconds)}
            </StyledTime>
            <StyledButton onClick={resetTimer}>Reset</StyledButton> {/* Add the reset button */}
        </StyledTimer>
    );
};

export default Timer;
