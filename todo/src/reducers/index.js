import { ADDTODO, DELETETODO, TOGGLETODO } from '../actions';

export default (todos = [], action) => {
    switch(action.type) {
        case ADDTODO:
            return [...todos, {
                id: todos.length,
                value: action.payload,
                completed: false
            }];
        case DELETETODO: 
            const deleteId = Number(action.payload);
            return todos.filter(todo => {return todo.id !== deleteId});
        case TOGGLETODO:
            const toggleId = Number(action.payload);
            return todos.map(todo => {
                if (todo.id !== toggleId) {
                  return todo;
                }
                return {...todo, completed: !todo.completed}
            })
        default:
            return todos;
    }
};