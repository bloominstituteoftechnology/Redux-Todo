import { combineReducers } from 'redux';
import listToDo from './array';
import completeToDo from './completion';

const rootReducer = combineReducers({
    array: listToDo,
    completion: completeToDo,
});

export default rootReducer;