import { ADD_ITEM, REMOVE_ITEM } from '../Actions';

const initialState = {
    todos: [
        {
            value: 'Walk the dog',
            completed: false
        }
    ],
    todo: {
        value: '',
        completed: false
    }
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload]
        case REMOVE_ITEM:
            return [...state, action.payload]
        default:
            return state;
    }
};