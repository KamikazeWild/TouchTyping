import React, { useState, useEffect } from "react";

const Timer = ({ isTyping, setIsTyping }) => {
	const [timer, setTimer] = useState(30);

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
		<div className="App">
			<h2>Time remaining</h2>
			<select name="time" onChange={(e) => setClock(e)}>
				<option value="30">30 seconds</option>
				<option value="60">1 minute</option>
				<option value="120">2 minutes</option>
				<option value="300">5 minutes</option>
			</select>
			<h3>{"0" + minutes + ":" + (seconds >= 10 ? seconds : "0" + seconds)}</h3>
		</div>
	);
};

export default Timer;
