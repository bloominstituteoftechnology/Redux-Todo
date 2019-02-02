import {ADDTODO} from '../actions/indexAction';
import {COMPLETE_TODO} from '../actions/indexAction';
import {DELETE_TODO} from '../actions/indexAction';

const initialState = {
    title: 'Welcome to the react redux todo app!',
    todos: []
}


const reducer = (state = initialState, action) => {
    console.log("action: ", action);
    switch (action.type){
        case ADDTODO:
        console.log('todo added...')
        let newTodos = [...state.todos, action
            .payloadTodo]
        return {...state, todos: newTodos};

        case COMPLETE_TODO:   
        console.log('todo completed/toggled...', COMPLETE_TODO)
        let toggleTodos =  state.todos.slice();
            toggleTodos = toggleTodos.map(todo => 
             todo.id === action.id ? 
             {...todo, completed: !todo.completed } : todo)
        return {...state, todos: toggleTodos}
        
        case DELETE_TODO: 
        console.log('todo deleted..', DELETE_TODO)
            let deleteTodos = state.todos.slice();
            deleteTodos = deleteTodos.filter(todo => todo.completed !== true)
            return {...state, todos: deleteTodos}
        default:
        return state;
    }
}

export default reducer;