import { FETCH_TODOS, CREATE_TODO, COMPLETE_TODO, DELETE_TODO} from '../actions'

export const todosReducer = (todos = [], action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return todos.concat(action.payload)
        case CREATE_TODO:
            return todos.concat(action.payload)
        case COMPLETE_TODO:
            return todos.map(todo => {
                if(todo.id === action.payload){
                    todo.completed = !todo.completed;
                }
                return todo
            })
        default:
            return todos;
    }
}