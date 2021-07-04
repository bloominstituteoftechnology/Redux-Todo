import {ADD_TODO} from '../actions/actions'



export default (todos=[], action) => {
    switch(action.type) {
        case ADD_TODO:
        return [...todos, {
            todo: action.todo,
            id: action.id
        }]
        default:
        return todos
    }
}