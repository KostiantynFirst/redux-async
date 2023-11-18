import { useSelector } from "react-redux";
import { CounterContainer, CounterContainerParagraph } from "./TaskCounter.styled"
import { selectTaskCount } from "redux/selectors";

export const TaskCounter = () => {

    const {active, completed } = useSelector(selectTaskCount);

    return (
        <CounterContainer>
            <CounterContainerParagraph>Active: {active} </CounterContainerParagraph>
            <CounterContainerParagraph>Completed: {completed} </CounterContainerParagraph>
        </CounterContainer>
    )
}