import React, { useEffect } from "react";
import {StyledSelect, StyledTime, StyledTimer} from "../styles";

const Timer = ({ isTyping, setIsTyping, timer, setTimer, children}) => {
	const minutes = Math.floor((timer / 60) % 60);
	const seconds = timer % 60;

	const setClock = (e) => {
		setTimer(parseInt(e.target.value));
		setIsTyping(false);
	};

	useEffect(() => {
		while (isTyping && timer > 0) {
			const interval = setInterval(() => {
				setTimer((prevVal) => prevVal - 1);
			}, 1000);

			return () => {
				clearInterval(interval);
			};
		}
	});

	return (
		<StyledTimer>
			<h2>Time remaining</h2>
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
