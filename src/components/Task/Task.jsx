import { MdClose } from 'react-icons/md';
import { TaskContainer } from './Task.styled';
// import { useDispatch } from 'react-redux';

export const Task = ({ task }) => {
      
    // const dispatch = useDispatch();

    // const handleDelete = () => dispatch(deleteTask(task.id));
    // const handleToggle = () => dispatch(toggleCompleted(task.id))

    return (
      <TaskContainer>
        <input
          type="checkbox"
          checked={task.completed}
          // onChange={handleToggle}
        />
        <p>{task.text}</p>
        <button>
          <MdClose size={24} />
        </button>
      </TaskContainer>
    );
  };