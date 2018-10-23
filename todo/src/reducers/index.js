import { ADD_TODO, TOGGLE_TODO } from "../actions"

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state, 
                todos: [
                    ...state.todos, 
                    {value: action.payload, completed:false}
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if (index === action.payload) {
                        return { ...todo, completed: !action.payload};
                    } else {
                        return todo;
                    }
                })
            };
    }
};
export default todoReducer;