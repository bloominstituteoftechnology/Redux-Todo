import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/actions";


const initialState = {
    todos:[
        { todo: "Bank Deposit", completed: false},
        { todo: "Pay phone bill", completed: false },
        { todo: "Lunch date @ 1pm", completed: false }
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
                ...state, todos: state.todos.filter(todo =>  !todo.completed)
            }
        default:
            return state
    }
}