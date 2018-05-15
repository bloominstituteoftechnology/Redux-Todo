import { FETCH_TODOS, CREATE_TODO} from '../actions'

export default (todos = [], action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return todos.concat(action.payload)
        case CREATE_TODO:
            return todos.concat(action.payload);
        default:
            return todos;
    }
}