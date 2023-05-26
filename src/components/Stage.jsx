import { useEffect, useState } from "react";

import { calculateAccuracy } from "../utils/StatLogic";

const Stage = ({ setIsTyping }) => {
	let Strings = ["sf js sf js", "dsa las kas kjl"];
	const [currentString, setCurrentString] = useState(Strings[0]);
	const [status, setStatus] = useState("not-wrong");
	const [accuracy, setAccuracy] = useState(0);
	const [allStringsShown, setAllStringsShown] = useState([Strings[0]]);
	const [pastInputStrings, setPastInputStrings] = useState([]);

	const nextString = () => {
		if (currentString === Strings[Strings.length - 1]) {
			setCurrentString(Strings[0]);
		} else {
			setCurrentString(Strings[Strings.indexOf(currentString) + 1]);
		}
	};

	const testString = (e) => {
		setIsTyping(true);

		const inputString = e.target.value;

		if (inputString.length === currentString.length) {
			nextString();
			const newAllStringsShown = [...allStringsShown, currentString];
			if (newAllStringsShown[0] === newAllStringsShown[1]) {
				newAllStringsShown.shift();
			}
			setAllStringsShown(newAllStringsShown);
			console.log(allStringsShown);

			const newPastInputStrings = [...pastInputStrings, inputString];
			setPastInputStrings(newPastInputStrings);
			e.target.value = "";
		}
	};

	const handleKeyDown = (event) => {
		if (event.keyCode === 32 || event.which === 32) {
			console.log("Space bar pressed");
			const inputString = event.target.value;
			setAccuracy(
				calculateAccuracy(allStringsShown, [...pastInputStrings, inputString])
			);
		}
	};

	return (
		<div>
			<h1>{currentString}</h1>
			<div>
				<input
					type="text"
					className={`input-field ${status}`}
					onChange={(e) => testString(e)}
					onKeyDown={handleKeyDown}
				/>
			</div>
			<p>Accuracy: {accuracy}</p>
		</div>
	);
};

export default Stage;
