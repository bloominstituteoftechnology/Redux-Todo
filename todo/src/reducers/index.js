import { ADD_TASK } from '../actions/index';

const initialState = {
    listArray: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return 'Hello';
        default:
            return state;
    }
}