import { ADD_ITEM, REMOVE_ITEM } from '../Actions';

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