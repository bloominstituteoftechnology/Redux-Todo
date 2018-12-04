import { ADD } from '../actions';

const initialState = {
    tasks: [{
        value: 'Walk the dog',
        completed: false
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                tasks: [...state.tasks,{
                    value: action.newTask,
                    completed: false
                }]
            }
        default:
            return {...state};
    }
};

export default reducer;