import {ADD} from "../actions"

export default (todos = [], action) => {
    switch (action.type) {
        case ADD:
        console.log('added');
        break;
        default:
        return console.log('nope')

    }
};