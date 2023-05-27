import { FaRegClock } from 'react-icons/fa';
import { BiTask } from 'react-icons/bi';
import { useState } from "react";

import Stage from "./components/Stage";
import Timer from "./components/Timer";

import {StyledApp, StyledHeading, ContentContainer, IconWrapper } from "./styles"

function App() {
	const [isTyping, setIsTyping] = useState(false);
	const [timer, setTimer] = useState(30);

	return (
		<StyledApp>
			<StyledHeading>Typing test</StyledHeading>
			<ContentContainer>
				<Timer isTyping={isTyping} setIsTyping={setIsTyping} timer={timer} setTimer={setTimer}>
					<IconWrapper>
						<FaRegClock size="1.5em" />
					</IconWrapper>
				</Timer>
				<Stage setIsTyping={setIsTyping} timer={timer}>
					<IconWrapper>
						<BiTask size="1.5em" />
					</IconWrapper>
				</Stage>
			</ContentContainer>
		</StyledApp>
	);
}

export default App;
