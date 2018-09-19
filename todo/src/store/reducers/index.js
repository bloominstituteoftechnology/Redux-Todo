import { ADD_TASK, TOGGLE_TASK } from '../actions';

const initialState = {
    tasks: [
        {
            task: "Walk the dog",
            complete: false
        }
    ]
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload]};
        case TOGGLE_TASK:
            return {...state, tasks: state.tasks.map((task, index) => {
                if (index === action.payload) {
                    return {...task, complete: !task.complete};
                } else {
                    return task;
                }
            })};
        default:
            return state;
    }
}