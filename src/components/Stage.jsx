import { useState } from "react";

const Stage = () => {
	let Strings = ["sf js sf js", "dsa las kas kjl"];
	const [currentString, setCurrentString] = useState(Strings[0]);
	const [status, setStatus] = useState("not-wrong");

	const nextString = () => {
		if (currentString === Strings[Strings.length - 1]) {
			setCurrentString(Strings[0]);
		} else {
			setCurrentString(Strings[Strings.indexOf(currentString) + 1]);
		}
	};

	const testString = (e) => {
		const inputString = e.target.value;

		if (inputString.length < currentString.length) {
			setStatus("not-wrong");
		} else if (
			inputString.length >= currentString.length &&
			inputString !== currentString
		) {
			setStatus("wrong");
		} else if (inputString === currentString) {
			nextString();
			e.target.value = "";
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
				/>
			</div>
		</div>
	);
};

export default Stage;
