import { ADD_TASK } from '../actions/index';

const initialState = {
    listArray: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            {
                if (state.listArray.length) {
                    return {
                        listArray: [...state.listArray, action.payload]
                    };
                } else {
                    console.log('here');
                    return {
                        listArray: [action.payload]
                    }
                }

            }
        default:
            return state;
    }
}