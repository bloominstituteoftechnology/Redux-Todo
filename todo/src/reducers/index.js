import {
    NEW_TODO,
    TOGGLE_COMPLETE,
    DEL_TODO
} from '../actions';

//Implementation attempt at using local files
let initialArray = [];

const saveData = (array) => {
    return localStorage.setItem('array', JSON.stringify(array));
}

const retrieveData = () => {
    return initialArray = JSON.parse(localStorage.getItem('array'));
}

export default (todos = retrieveData(), action) => { // Initialize the state 'todos'
    const newTodos = todos.slice(0);
    switch (action.type) {
        case NEW_TODO:
            saveData(todos.concat(action.payload));
            return todos.concat(action.payload);
        case TOGGLE_COMPLETE:
            newTodos[action.payload].completed = !newTodos[action.payload].completed;
            saveData(newTodos);
            return newTodos;
        case DEL_TODO:
            newTodos.splice(action.payload, 1);
            saveData(newTodos);
            return newTodos;
        default:
            return todos;
    }
}