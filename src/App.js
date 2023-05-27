import { FaRegClock } from 'react-icons/fa';
import { BiTask } from 'react-icons/bi';
import { useState } from "react";

import Stage from "./components/Stage";
import Timer from "./components/Timer";

import {StyledApp, StyledHeading, ContentContainer, IconWrapper, TestBox} from "./styles"
import Stats from "./components/Stats";

function App() {
	const [isTyping, setIsTyping] = useState(false);
	const [timer, setTimer] = useState({remainingTime: 30, elapsedTime: 0});
	const [statistics, setStatistics] = useState({ accuracy: 0, correctWords: 0, totalWords: 0, wordsPerMinute: 0 });

	return (
		<StyledApp>
			<StyledHeading>Typing test</StyledHeading>
			<ContentContainer>
				<TestBox>
					<Timer isTyping={isTyping} setIsTyping={setIsTyping} timer={timer} setTimer={setTimer}>
						<IconWrapper>
							<FaRegClock size="1.5em" />
						</IconWrapper>
					</Timer>
					<Stage setStatistics={setStatistics} setIsTyping={setIsTyping} timer={timer} />
				</TestBox>
				<Stats statistics={statistics}>
					<IconWrapper>
						<BiTask size="1.5em" />
					</IconWrapper>
				</Stats>
			</ContentContainer>
		</StyledApp>
	);
}

export default App;
