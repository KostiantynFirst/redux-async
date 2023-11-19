import { useSelector } from "react-redux";
import { StyledUl, TaskListItem } from "./TaskLists.styled"
import { selectVisibleTasks } from "redux/selectors";
import { Task } from "components/Task/Task";


export const TaskList = () => {

    const tasks = useSelector(selectVisibleTasks);

    return (
        <StyledUl>
            {tasks.map(task => (
                <TaskListItem key={task.id}>
                    <Task task={task} />
                </TaskListItem>
            ))}
        </StyledUl>
    )
}