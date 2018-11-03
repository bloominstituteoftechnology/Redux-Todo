import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";


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
                ...state, todos: state.todos.map((todo, id) => {
                if (id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                else {
                    return id;
                }
                }
                )}
        default:
            return state
    }
}