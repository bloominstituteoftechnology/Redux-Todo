import { COMPLETE, UNCOMPLETE } from '../actions';

export const oldState = () => {
  const todos = [
    {
      value: 'Walk the dog.',
      completed: true,
    },
    {
      value: 'Buy milk.',
      completed: false,
    },
    {
      value: 'Relax.',
      completed: false,
    },
  ];
};

export const toggleToDo = (completed = false, action) => {
  switch (action.type) {
    case COMPLETE:
      return (completed = true);
    case UNCOMPLETE:
      return (completed = false);
    default:
      return completed;
  }
};

export default toggleToDo;