import {ADDTODO} from '../actions/indexAction';

let initialState = {
    title: 'Welcome to the react redux todo app!',
    todos: []
}


const reducer = (state = initialState, action) => {
    console.log("action: ", action);
    switch (action.type){
        case ADDTODO:
        console.log('todo added...')
        let newTodos = [...state.todos, action.payload]
        return {...state, todos: newTodos};
        default:
        return state;
    }
}

export default reducer;