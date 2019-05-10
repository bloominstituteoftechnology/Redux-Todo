import {ADD} from "../actions"

export default (todos = [], action) => {
    switch (action.type) {
        case ADD:
        console.log('added');
        const todosNew= [...todos, action.payload];
        console.log('reducer', todosNew, todos)
        return todosNew;
        break;
        default:
        todos = ['lol']

    }
};