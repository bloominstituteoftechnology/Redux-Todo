import {ADDTODO} from '../actions/indexAction';
import {COMPLETE_TODO} from '../actions/indexAction';
import {DELETE_TODO} from '../actions/indexAction';

let initialState = {
    title: 'Welcome to the react redux todo app!',
    todos: []
}


const reducer = (state = initialState, action) => {
    console.log("action: ", action);
    switch (action.type){
        case ADDTODO:
        console.log('todo added...')
        let newTodos = [...state.todos, action.payloadTodo]
        return {...state, todos: newTodos};
        case COMPLETE_TODO:
        console.log('todo completed/toggled...')
        return {todos: state.todos.map(todo => {
           return todo.id === action.id ? {...todo, completed: !todo.completed } : todo}) }
        // let completedTodos = [...state.todos, action.completeTodo]
        // return Object.assign({}, state, {todos: completeTodo})
        case DELETE_TODO: 
        return {todos: state.todos.filter(todo => todo.id !== action.id)}
        console.log('todo deleted..')
        return 
        default:
        return state;
    }
}

export default reducer;