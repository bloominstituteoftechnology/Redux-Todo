import { ADD, TOGGLE, REMOVE } from '../actions/todoActions';

export default (todos, action) => {
    switch(action.type) {
        case ADD:
            return {}
        case TOGGLE:
            return {}
        case REMOVE:
            return {}
        default:
            return todos;
    }
}