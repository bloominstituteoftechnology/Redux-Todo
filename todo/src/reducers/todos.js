import { ADDTODO } from '../actions/todoActions';

export default (todos = [], action) => {
    switch (action.type) {
        case ADDTODO:
            return [...todos, action];

        default:
            return todos;

    }

}