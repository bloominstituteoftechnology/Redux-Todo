import { createStore } from 'redux';
import { todosReducer } from './reducers';

export const store = createStore(todosReducer);