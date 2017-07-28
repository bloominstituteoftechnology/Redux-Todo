import { combineReducers } from 'redux';
import todosReducer from './todosreducer';

const rootReducer = combineReducers({
  todosReducer: todosReducer,
  // todoCompleted: todoCompletedReducer
});

export default rootReducer;