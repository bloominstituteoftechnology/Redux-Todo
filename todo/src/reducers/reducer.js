import { ADD_TODO } from '../actions/add_todo';
import { TOGGLE_TODO } from '../actions/toggle_todo';

export default (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        {
          id: action.id,
          value: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return todos.map(item =>
        (item.id === action.id)
          ? {...item, completed: !item.completed}
          : item
      );
    default:
       return todos;
  }

};
