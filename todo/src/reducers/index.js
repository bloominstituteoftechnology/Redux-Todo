import { addItem } from '../actions';

export default (todos = 0, action) => {
    switch (action.type) {
        case ADDITEM:
            return todos + action.payload;
        default:
            return todos;
    }
};

