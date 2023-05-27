import styled from 'styled-components';

// Styles
const TestBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #dce8fc;
  padding: 1em;
  margin-top: 2em;
  border-radius: 10px;
`;


const StyledStage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #dce8fc;
  padding: 1em
`;

const StyledInput = styled.input`
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  &:disabled {
    background-color: #eee;
  }
`;

const StyledStatBox = styled.p`
  display: flex;
  align-items:center;
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

const StyledStat = styled.div`
  margin-right:1em
`

const StyledTimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #dce8fc;
  padding: 1em
`;

const StyledSelect = styled.select`
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const StyledTime = styled.h3`
  display: flex;
  align-items:center;
  margin-top: 20px;
  font-size: 24px;
  color: #333;
`;

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
  justify-content: center;
  width: 100%;
  max-width: 800px;
  padding: 1rem;
  gap: 2rem;
`;

const IconWrapper = styled.span`
  color: #3f51b5; // dark blue color
  margin-right: 0.75rem;
`;

export {StyledStage, TestBox, StyledTime, StyledSelect, StyledInput, StyledStatBox, StyledTimer, StyledApp, StyledHeading, ContentContainer, IconWrapper, StyledStat}