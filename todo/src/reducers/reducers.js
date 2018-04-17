import { ADD } from '../actions/actions';

export default (todo = [], action) => {
    switch(action.type){
        case ADD:
        const newTodo = todo.push(action.payload)
            return [...newTodo, action.payload];
        default:
            return todo;
    }
};