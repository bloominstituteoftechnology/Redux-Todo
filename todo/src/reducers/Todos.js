import { ADD_TODO, TOGGLE_TODO } from '../actions/actions';

const Todos = (todos = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...todos, action.payload]
        case 'TOGGLE_TODO':
        return todos.map(todo => {
           if (todo.id === action.payload) {
             return Object.assign({}, todo, { completed: !todo.completed })
        }
        return todo
    });
        default: 
            return state
    };
};

export default Todos;