import {ADD_TODO, COMPLETE_TODO} from '../actions/actions';

const initialState = {
    todos: []
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            }
        case COMPLETE_TODO: 
            const index = state.todos.findIndex(todo=>todo.id===action.payload.id);
            
            const completedTodo = state.todos[index];
            completedTodo.completed = true;

            return{
                todos: [...state.todos.slice(0, index), completedTodo, ...state.todos.slice(index + 1)]
            }
        default:
            return state;
    }
}