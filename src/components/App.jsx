import { Layout } from "./Layout/Layout";
import { TaskList } from "./TasksList/TasksList";
import { AppBar } from "./AppBar/AppBar";
import { useDispatch } from "react-redux";
import { TaskForm } from "./TaskForm/TaskForm";

export const App = () => {

const dispatch = useDispatch();

  return (
    <Layout>
      <AppBar />
      <TaskForm /> 
      <TaskList />
    </Layout>
  );
};
