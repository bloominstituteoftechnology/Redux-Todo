import { ADD_TODO } from '../actions/add_todo';
import { TOGGLE_TODO } from '../actions/toggle_todo';
import { DELETE_TODO } from '../actions/delete_todo';

export default (todos = (localStorage.getItem("storedArray") !== null) ? JSON.parse(localStorage.getItem("storedArray")) : [] , action) => {
  switch (action.type) {
    case ADD_TODO:
      let newArray = [
        ...todos,
        {
          id: action.id,
          value: action.text,
          completed: false
        }
      ];
      localStorage.setItem("storedArray", JSON.stringify(newArray));
      return newArray;
    case TOGGLE_TODO:
      let newArray2 = todos.map(item =>
        (item.id === action.id)
          ? {...item, completed: !item.completed}
          : item
      );
      localStorage.setItem("storedArray", JSON.stringify(newArray2));
      return newArray2;
    case DELETE_TODO:
      let newArray3 = todos.reduce((memo, item) => {
        if (item.id !== action.id) {
          memo.push(item);
          return memo;
        }
        return memo;
      }, []);
      localStorage.setItem("storedArray", JSON.stringify(newArray3));
      return newArray3;
    default:
       return todos;
  }

};
