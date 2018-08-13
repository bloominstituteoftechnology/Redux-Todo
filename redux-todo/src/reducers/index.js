import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { addTodo, toggleTodo, removeTodo } from '../actions';

const todos = handleActions({
  [addTodo]: (state, { payload: { text, id } }) => [
    ...state,
    { id, text, completed: false }
  ],
  [toggleTodo]: (state, { payload: { id } }) =>
    state.map(
      todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    ),
  [removeTodo]: (state, { payload: { id } }) =>
    state.filter(todo => todo.id !== id)
});

export default combineReducers({
  todos
});
