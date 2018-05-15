import {ADD, REMOVE, TOGGLE} from '../actions'

const initialState = [
    {name:'Hola Caracola',done: false},
    {name: 'Qué pasa calabaza?', done: false},
    {name: 'Another task...', done: true}
];
export const controller = function (state = initialState, action) {
    switch (action.type) {
        case ADD:
            return state.concat({name: action.payload, done: false});
        case REMOVE:
            return state;
        case TOGGLE:
            console.log(action.payload);
            console.log(state);
            const newState = state.slice();
            newState[action.payload].done = !newState[action.payload].done;
            return newState;
        default:
            return state;
    }
}