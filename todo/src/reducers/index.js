//import actions
import { ADD_TO_LIST, TOGGLE_COMPLETE } from '../actions';


const initialState = {
    todolist: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_LIST:
            return {
                ...state,
                todolist: [
                    ...state.todolist,
                    { item: action.payload, completed: false }
                ]
            }
        case TOGGLE_COMPLETE:
            return {
                ...state,
                todolist: state.todolist.map((item, index) => {
                    if (index === action.payload) {
                        return {...item, completed: !item.completed}
                    } else {
                        return item;
                    }
                })
            }
        default:
            return state;
    }
}