import {ADD, REMOVE, TOGGLE} from '../actions'

const initialState = [
    {name:'Hola Caracola',done: false},
    {name: 'Qué pasa calabaza?', done: false},
    {name: 'Another task...', done: true},
    {name: 'Another task...', done: true}
];
export const controller = function (state = initialState, action) {
    let newState = state.slice();
    switch (action.type) {
        case ADD:
            return state.concat({name: action.payload, done: false});
        case REMOVE:
            newState = newState.slice(0, action.payload).concat(newState.slice(action.payload + 1));
            // console.log("slice",newState.slice(0, action.payload))
            // console.log("slice",newState.slice(0, action.payload))
            // const next = action.payload + 1;
            // console.log(next);
            // console.log("slice",newState.slice(next))
            return newState;
        case TOGGLE:
            console.log(action.payload);
            console.log(state);
            newState[action.payload].done = !newState[action.payload].done;
            return newState;
        default:
            return state;
    }
}