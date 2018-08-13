import { createActions } from 'redux-actions';
import uuid from 'uuid/v1';

export const { addTodo, toggleTodo, removeTodo } = createActions({
  ADD_TODO: text => ({ text, id: uuid() }),
  TOGGLE_TODO: id => ({ id }),
  REMOVE_TODO: id => ({ id })
});
