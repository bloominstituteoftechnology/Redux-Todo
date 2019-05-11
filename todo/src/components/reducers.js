import { ADDTODO } from './actions';

export default (todo = '', action) => {
    console.log(todo);
    switch(action.type) {
        case ADDTODO:
            return todo;
        default:
            return todo;
    }
}