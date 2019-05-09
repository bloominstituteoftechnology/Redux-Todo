import { combineReducers } from 'redux';
import { titleReducer as title } from './titleReducer';
import { todosReducer } from './todosReducer';

 export default combineReducers({
    title,
    todosReducer
}); 