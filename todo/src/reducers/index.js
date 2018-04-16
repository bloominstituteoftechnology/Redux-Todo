import { combineReducers } from 'redux';
import ListReducer from './list';

const rootReducer = combineReducers({
  list: ListReducer
})

export default rootReducer;