import { useSelector } from 'react-redux';
import { statusFilters } from "redux/constants";
import { selectStatusFilter, selectTasks } from "redux/selectors";

export const useVisibleTasks = () => {

    const tasks = useSelector(selectTasks);
    const filter = useSelector(selectStatusFilter);

    switch (filter) {
        case statusFilters.active:
            return tasks.filter(task => !task.completed);
        case statusFilters.completed:
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
};