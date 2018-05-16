import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from '../actions';

// { todoText: 'Stuff', completed: false}

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            const stateCopy = Array.from(state);
            stateCopy.push(action.payload);
            return stateCopy;
        case COMPLETE_TODO:
            const stateCopy2 = Array.from(state);
            if (stateCopy2[action.payload].completed === true) {
                stateCopy2[action.payload].completed = false;
            } else {
                stateCopy2[action.payload].completed = true;
            }
            return stateCopy2;
        case REMOVE_TODO:
            const stateCopy3 = Array.from(state);
            stateCopy3.splice(action.payload, 1);
            return stateCopy3;
        default:
            return state;
    }
}