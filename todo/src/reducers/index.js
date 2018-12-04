import { ADD_TODO, COMPLETED, DELETE_ITEM } from '../actions';

const initialState = {
        todo: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
        const newArr = state.todo.concat({value: action.text, completed: false});
        return {
            ...state,
            todo: newArr
        };
        case COMPLETED:
        const newTodo = state.todo.map((task, index) => {
            if(index === action.id) {
                task.completed = !task.completed
            }
            return task;
        })
        return {
            todo: newTodo
        };    
        case DELETE_ITEM:
        const newCleanArr = state.todo.filter((task, index) => {
            if(index !== action.id) {
                return task;
            }
        }) 
        return {
            todo: newCleanArr
        };   
        default:
        return state;
    }
};