import { ADDTODO } from '../action/index';

export default (todos = [], action) => {
    switch(action.type) {
        case ADDTODO:
            return [...todos, ...action.payload]
    }
}