import {createStore} from 'redux';
import ToDoListReducer from '../reducers/TodoList';

export default () => {
  const store = createStore(ToDoListReducer);
  return store;
}