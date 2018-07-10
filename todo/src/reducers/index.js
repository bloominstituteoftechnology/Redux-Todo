import { combineReducers } from 'redux';

import todoReducer from './todoListReducer';

const rootReducer = combineReducers({ todos: todoReducer });

export default rootReducer;