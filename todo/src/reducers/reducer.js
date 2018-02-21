import { ADD_TODO } from '../actions/add_todo';
import { TOGGLE_TODO } from '../actions/toggle_todo';
import { DELETE_TODO } from '../actions/delete_todo';

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
    case DELETE_TODO:
      return todos.reduce((memo, item) => {
        if (item.id !== action.id) {
          memo.push(item);
          return memo;
        }
        return memo;
      }, []);
    default:
       return todos;
  }

};
