import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { addTask, deleteAllTask } from '../../redux/actions';
import css from './TaskForm.module.css';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };
  const handleDelete = event => {
    dispatch(deleteAllTask());
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
      <Button
        style={{ backgroundColor: 'grey' }}
        type="button"
        onClick={() => {
          handleDelete();
        }}
      >
        Delete all Tasks
      </Button>
    </form>
  );
};
