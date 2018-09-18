// import actions here
import { ADD_TODO } from '../actions/index';
import { TOGGLE_TODO } from '../actions/index';


export const initialState = {
    todos: [
        {
            value: 'Make todo list',
            completed: false,
            id: 0
        }
    ]
};

export function ToDoReducer(state = initialState, action){
    switch (action.type){
        // add reducer logic here
        case ADD_TODO:
            let newTodos = state.todos.map(todo => {
                return todo;
            })
            let newTask = {value: action.value, completed: false, id: action.id}
            newTodos.push(newTask);
            return {...state, todos: newTodos}

            case TOGGLE_TODO:
            let toggleTodos = state.todos.map(todo => {
                return todo;
            })
            toggleTodos[action.id].completed = !toggleTodos[action.id].completed;
            return {...state, todos: toggleTodos}


        default: 
            return state;
    }
}