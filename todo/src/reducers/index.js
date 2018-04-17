import {ADD} from "../actions"

export default (todos = [], action) => {
    switch (action.type) {
        case ADD:
        console.log('added');
        todos.push(action.payload)
        console.log('reducer', todos)
        return todos;
        break;
        default:
        todos = ['lol']

    }
};