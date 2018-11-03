import { ADD_TODO, TOGGLE_TODO } from "../actions";
 const initialState = {
    todos:[
        { todo: "Eat Breakfast", completed: false},
        { todo: "Brush teeth", completed: false }
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
                )}
        default:
            return state
    }
}