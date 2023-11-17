import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { Form, Input } from './TaskForm.styled';
import { addTask } from 'redux/operations';

export const TaskForm = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.target;
      dispatch(addTask(form.elements.text.value));
      form.reset();
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="text"
          placeholder="Enter task text..."
        />
        <Button type="submit">Add task</Button>
      </Form>
    );
  };