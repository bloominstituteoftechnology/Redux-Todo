import {SUBMIT, CLEAR, COMPLETED} from '../actions';

const initialState = [{value: 'task1', completed: false}];

const rootReducer = (todos = initialState, action) => {
    switch (action.type) {
        case SUBMIT:
            return Object.assign({}, todos, {value: action.payload, completed: false})
        case CLEAR:
        case COMPLETED:
        default:
            return todos;
    }
};

export default rootReducer;
