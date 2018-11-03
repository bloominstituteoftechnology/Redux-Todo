import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/actions";


const initialState = {
    todos:[
        { todo: "Get Milk", completed: false},
        { todo: "Pick up dog food", completed: false }
    ]

}


export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {todos: [...state.todos , {todo: action.payload, completed:false}]});
        case TOGGLE_TODO:
            return {
                ...state, todos: state.todos.map((todo, index) => {
                if (index === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                else {
                    return todo;
                }
                }
                )
            }
        case DELETE_TODO:

            return {
                ...state, todos: state.todos.map((todo, index) => (index === action.payload) ? { ...todo, completed: !todo.completed } : index)
            }
        default:
            return state
    }
}