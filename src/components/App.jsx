import { Layout } from "./Layout/Layout";
import { TaskList } from "./TasksList/TasksList";
import { AppBar } from "./AppBar/AppBar";
import { useDispatch, useSelector } from "react-redux";
import { TaskForm } from "./TaskForm/TaskForm";
import { useEffect } from "react";
import { fetchTasks } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

useEffect(() => {
  dispatch(fetchTasks());
}, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm /> 
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </Layout>
  );
};
