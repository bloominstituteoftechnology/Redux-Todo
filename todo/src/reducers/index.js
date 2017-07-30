import { combineReducers } from 'redux';
import todosReducer from './todosreducer';

const rootReducer = combineReducers({
  todo: todosReducer,
  // todoCompleted: todoCompletedReducer
});

export default rootReducer;