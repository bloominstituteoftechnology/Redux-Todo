import { combineReducers } from 'redux';
import ItemsReducer from './ItemsReducer';
import InputReducer from './InputReducer';

const rootReducer = combineReducers({
    items: ItemsReducer,
    newItem: InputReducer,
});

export default rootReducer;