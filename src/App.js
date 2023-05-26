import "./App.css";

import { useState } from "react";

import Stage from "./components/Stage";
import Timer from "./components/Timer";

function App() {
	const [isTyping, setIsTyping] = useState(false);
	const [timer, setTimer] = useState(300);

	return (
		<div className="App">
			<h1>Typing test</h1>
			<Timer isTyping={isTyping} setIsTyping={setIsTyping} timer={timer} setTimer={setTimer} />
			<Stage setIsTyping={setIsTyping} timer={timer} />
		</div>
	);
}

export default App;
