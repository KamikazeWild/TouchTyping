import styled from "styled-components";

const TestBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #dce8fc;
	padding: 1em;
	gap: 1.5rem;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
	}
`;

const StyledWord = styled.span`
	color: ${(props) => (props.alternate ? "#da3131" : "#5959fa")};
	background-color: #c8daf7;
	padding: 0.25em 0.5em;
	margin-bottom: 0.5em;
	display: inline-block; // makes sure all words are in the same line
	font-size: 26px;
	white-space: nowrap; // prevent breaking the line in the middle of the word
`;

const StyledStage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #dce8fc;
	padding: 1em;
`;

const StyledInput = styled.input`
	padding: 10px;
	font-size: 20px;
	border: 1px solid #ddd;
	border-radius: 4px;
	&:disabled {
		background-color: #c8daf7;
	}
`;

const StyledStatBox = styled.p`
	display: flex;
	align-items: center;
	margin-top: 20px;
	font-weight: bold;
	font-size: 16px;
	color: #333;
`;

const StyledStat = styled.div`
	margin-right: 1em;
`;

const StyledTimer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #dce8fc;
	padding: 1em;
`;

const StyledSelect = styled.select`
	margin-top: 10px;
	padding: 10px;
	font-size: 16px;
	border: 1px solid #ddd;
	border-radius: 4px;
`;

const StyledTime = styled.h3`
	display: flex;
	align-items: center;
	margin-top: 20px;
	margin-bottom: 10px;
	font-size: 20px;
	color: #333;
`;

const StyledButton = styled.button`
  padding: 0.3em 0.75em;
  font-size: 16px;
  background-color: #3f51b5;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2d3d9e;
  	box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #1e2773;
    box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.3);
  }
`

const StyledApp = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	height: 100vh;
	padding-top: 1rem;
	background-color: #e8f0fe; // pleasant light blue color
	box-sizing: border-box;
`;

const StyledHeading = styled.h1`
	font-size: 2rem;
	color: #3f51b5; // dark blue color
	margin-bottom: 1rem;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	max-width: 800px;
	padding: 1rem;
	gap: 1.5rem;
`;

const IconWrapper = styled.span`
	color: #3f51b5; // dark blue color
	margin-right: 0.5rem;
`;

export {
	StyledStage,
	StyledWord,
	TestBox,
	StyledTime,
	StyledSelect,
	StyledInput,
	StyledStatBox,
	StyledStat,
	StyledTimer,
	StyledButton,
	StyledApp,
	StyledHeading,
	ContentContainer,
	IconWrapper,
};
