import { ADDTODO } from '../actions';

export default (todos = [], action) => {
  switch (action.type) {
    case ADDTODO:
      return [
        ...todos,
        {
          value: action.todo,
          completed: false}
      ]
    default:
      return todos;
  }
};
