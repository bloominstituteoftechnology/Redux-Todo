import { ADDITEM } from '../actions';

export default (todos = [], action) => {
    switch(action.type) {
        case ADDITEM:
            return todos = [...todos,
                {
                    value: 'Hello World\n',
                    completed: false,
                }]
        default:
            return todos;
    }
}