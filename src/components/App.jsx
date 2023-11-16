import { Layout } from "./Layout/Layout";
import { TaskList } from "./TasksList/TasksList";
import { AppBar } from "./AppBar/AppBar";
import { useDispatch } from "react-redux";
import { TaskForm } from "./TaskForm/TaskForm";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

export const App = () => {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchContacts)
}, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm /> 
      <TaskList />
    </Layout>
  );
};
