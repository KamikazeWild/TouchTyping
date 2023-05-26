import "./App.css";

import { useState } from "react";

import Stage from "./components/Stage";
import Timer from "./components/Timer";

function App() {
	const [isTyping, setIsTyping] = useState(false);

	return (
		<div className="App">
			<h1>Typing test</h1>
			<Timer isTyping={isTyping} setIsTyping={setIsTyping} />
			<Stage setIsTyping={setIsTyping} />
		</div>
	);
}

export default App;
