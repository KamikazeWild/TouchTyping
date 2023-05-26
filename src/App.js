import "./App.css";

import Stage from "./components/Stage";
import Timer from "./components/Timer";

function App() {
	return (
		<div className="App">
			<h1>Typing test</h1>
			<Timer />
			<Stage />
		</div>
	);
}

export default App;
