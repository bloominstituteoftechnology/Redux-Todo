import { ADDTODO, SWITCH_COMPLETE, REMOVE_COMPLETE, REMOVE_ITEM } from '../actions'

const list = (todos = [], action) => {
    switch (action.type) {
        case ADDTODO:
            return todos.concat([{
                    text: action.payload,
                    completed: false
                }])
            break;
        case SWITCH_COMPLETE:
            return todos.map((todo, i) => {
                if (action.payload === i) {
                    todo.completed ? todo.completed = false : todo.completed = true
                }
                return todo;
            })
            break;
        case REMOVE_COMPLETE:
            return (
                todos.filter((todo) => {
                return !todo.completed
                })
            )
            break;
        case REMOVE_ITEM:
        console.log(action.payload, todos);
            return todos.filter((todo, i) => {
                    if (action.payload !== i) { return true; }
                    return false })
            break;
        default:
            return todos;
    }
}

export default list;