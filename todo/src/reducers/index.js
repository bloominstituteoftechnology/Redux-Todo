import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from '../actions';

// { todoText: 'Stuff', completed: false}

let initialArray = [];

const saveData = (array) => {
    return localStorage.setItem('array', JSON.stringify(array));
}

const retrieveData = () => {
    initialArray = JSON.parse(localStorage.getItem('array'));
    return initialArray === null ? [] : initialArray;
}

export default (state = retrieveData(), action) => {
    switch (action.type) {
        case ADD_TODO:
            const stateCopy = Array.from(state);;
            stateCopy.push(action.payload);
            saveData(stateCopy);
            return stateCopy;
        case COMPLETE_TODO:
            const stateCopy2 = Array.from(state);
            if (stateCopy2[action.payload].completed === true) {
                stateCopy2[action.payload].completed = false;
            } else {
                stateCopy2[action.payload].completed = true;
            }
            saveData(stateCopy2);
            return stateCopy2;
        case REMOVE_TODO:
            const stateCopy3 = Array.from(state);
            stateCopy3.splice(action.payload, 1);
            saveData(stateCopy3);
            return stateCopy3;
        default:
            return state;
    }
}