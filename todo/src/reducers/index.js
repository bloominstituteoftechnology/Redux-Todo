import { combineReducers } from 'redux';
import todoListReducer from './todoListReducer'
// import addItem from './addItem'

const rootReducer = combineReducers({
  listItems: todoListReducer,
  // addItem: addItem
});

export default rootReducer;
