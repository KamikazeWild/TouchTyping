import {StyledStat, StyledStatBox} from "../styles";

const Stats = ({ statistics, children }) => {
    return (
        <StyledStatBox>
            {children}
            <StyledStat>Accuracy: {statistics.accuracy.toFixed(2)}</StyledStat>
            <StyledStat>Correct Words: {statistics.correctWords}</StyledStat>
            <StyledStat>Total Words: {statistics.totalWords}</StyledStat>
            <StyledStat>Word Per Minute : {statistics.wordsPerMinute.toFixed(2)}</StyledStat>
        </StyledStatBox>
    );
};

export default Stats;