import { CREATETODO, TOGGLE_COMPLETE } from '../actions/index';

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
        case TOGGLE_COMPLETE:
            return{
            ...state,
            items: state.items.map((item, index) => {
                if (index === action.payload) {
                    return {...item, completed: !item.completed};
                } else {
                    return item;
                }
            })
        }
        default: return state;
    }
}



export default todoListReducer;