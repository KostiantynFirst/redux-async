import { useSelector } from 'react-redux';
import { statusFilters } from "redux/constants";
import { getStatusFilter, selectTasks } from "redux/selectors";

export const useVisibleTasks = () => {

    const tasks = useSelector(selectTasks);
    const filter = useSelector(getStatusFilter);

    switch (filter) {
        case statusFilters.active:
            return tasks.filter(task => !task.completed);
        case statusFilters.completed:
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
};