import React, { useEffect } from "react";
import {StyledSelect, StyledTime, StyledTimer} from "../styles";

const Timer = ({ isTyping, setIsTyping, timer: {elapsedTime, remainingTime}, setTimer, children}) => {
	const minutes = Math.floor((remainingTime / 60) % 60);
	const seconds = remainingTime % 60;

	const setClock = (e) => {
		setTimer({ remainingTime: parseInt(e.target.value), elapsedTime: 0 });
		setIsTyping(false);
	};

	useEffect(() => {
		while (isTyping && remainingTime > 0) {
			const interval = setInterval(() => {
				setTimer((prevVal) => ({
					remainingTime: prevVal.remainingTime - 1,
					elapsedTime: prevVal.elapsedTime + 1
				}));
			}, 1000);

			return () => {
				clearInterval(interval);
			};
		}
	});

	return (
		<StyledTimer>
			<h2>Time Duration</h2>
			<StyledSelect  name="time" onChange={(e) => setClock(e)}>
				<option value="30">30 seconds</option>
				<option value="60">1 minute</option>
				<option value="120">2 minutes</option>
				<option value="300">5 minutes</option>
			</StyledSelect>
			<StyledTime>{children} {"0" + minutes + ":" + (seconds >= 10 ? seconds : "0" + seconds)}</StyledTime>
		</StyledTimer>
	);
};

export default Timer;
