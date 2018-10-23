import {ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED} from "../Actions";

const initialState = {
    todos: [
        {task: "Clean the kitchen", 
        completed: false},
    ]
}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos, 
                    { task: action.payload,
                    completed: false}]
            };
        case TOGGLE_COMPLETED:
            return {
                todos: state.todos.map((todo, index) => {
                    if (index === action.payload) {
                        return { 
                            ...todo, 
                            completed: !todo.completed};
                    }
                    else {
                        return todo;
                    }
                })
            };
        case DELETE_TODO:
            return {
                todos: state.todos.filter((todo, index) => {
                    if (index === action.payload) {
                        return null;
                    }
                    else {
                        return todo;
                    }
                })
            }
        default: 
            return state;
    }
}

export default todoReducer;