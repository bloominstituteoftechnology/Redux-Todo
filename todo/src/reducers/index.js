import { combineReducers } from 'redux';
import NEW_TODO from './todoReducer';

const rootReducer = combineReducers({
    todos: NEW_TODO
});
export default rootReducer;