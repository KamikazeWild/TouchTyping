import styled from 'styled-components';
import { FaRegClock } from 'react-icons/fa';
import { BiTask } from 'react-icons/bi';
import { useState } from "react";

import Stage from "./components/Stage";
import Timer from "./components/Timer";

const StyledApp = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding-top: 2rem;
  background-color: #e8f0fe; // pleasant light blue color
  box-sizing: border-box;
`;

const StyledHeading = styled.h1`
  font-size: 2.5rem;
  color: #3f51b5; // dark blue color
  margin-bottom: 1.5rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  padding: 1rem;
  gap: 2rem;
`;

const IconWrapper = styled.span`
  color: #3f51b5; // dark blue color
  margin-right: 0.5rem;
`;


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
