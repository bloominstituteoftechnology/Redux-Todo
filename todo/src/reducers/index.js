import { combineReducers } from 'redux';
import reducers from './reducers';

const rootReducer = combineReducers({
    todos: reducers
});

export default rootReducer;