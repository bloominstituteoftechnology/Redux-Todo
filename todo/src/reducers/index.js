import { HANDLE_NEW_TASK_INPUT, ADD_TASK } from '../actions';

export const initialState = [
    {
        id: 0,
        text: 'Do laundry',
        completed: false
    }
];

export function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state;
    }
}

