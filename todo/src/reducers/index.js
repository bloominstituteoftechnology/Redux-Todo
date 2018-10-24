//import actions
import { ADD_TO_LIST } from '../actions';


const initialState = {
    todolist: [
        // {
        //     item: 'take out papers',
        //     completed: false
        // },
        // {
        //     item: 'take out trash',
        //     completed: false
        // },
        // {
        //     item: 'dishes',
        //     completed: false
        // },
        // {
        //     item: 'sweep the floors',
        //     completed: false
        // }
    ]
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
        default:
            return state;
    }
}