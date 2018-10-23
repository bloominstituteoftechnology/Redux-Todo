import { CREATETODO} from '../actions/index';

const initialState = {
    items: [
        { task: 'Do laundry', completed: false}
    ]
}

const todoListReducer = (state = initialState, action) => {
    console.log('Inside reducer', action, state);
    switch(action.type) {
        case CREATETODO:
        return {
            ...state,
            items: [...state.items, {task: action.payload, completed: false}]
        }
        default: return state;
    }
}

export default todoListReducer;