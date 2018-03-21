import { combineReducers} from 'redux';
import todoReducers from './todosReducers';

const rootReducer = combineReducers({
    todos: todoReducers
});


export default rootReducer;