import { ADD_TASK, TOGGLE_COMPLETED, DELETE_TASK } from '../actions/index';

const initialState = {
    listArray: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                listArray: [...state.listArray, { value: action.payload, completed: false }]
            };

        case TOGGLE_COMPLETED:
            return {
                ...state,
                listArray: state.listArray.map((task, index) => {
                    if(index === action.payload) {
                        return {
                            ...task,
                            completed: !task.completed
                        };
                    } else {
                        return task;
                    }
                })
            };

        case DELETE_TASK:
            return {
                ...state,
                listArray: state.listArray.filter((task, index) => index !== action.payload)
            };

        default:
            return state;
    }
}