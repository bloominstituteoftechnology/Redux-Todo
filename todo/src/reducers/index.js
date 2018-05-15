import {ADD, REMOVE, TOGGLE} from '../actions'


/** IMPLEMENT LOCAL STORAGE */
let initialState = [];
let localStore;
let myStorage;
window.localStorage
    ?
    myStorage = window.localStorage
    :
    /** Set initialState from localStorage */
    (myStorage.length === 0
        ?
        initialState = [
        {name:'Hola Caracola',done: false},
        {name: 'Qué pasa calabaza?', done: false},
        {name: 'Another task...', done: true}
        ]
        :
        myStorage.forEach( data => initialState.push(JSON.parse(data)) )
    );

console.log(myStorage);

function addToLocalStorage (state) {
    for (let i in localStorage) {
        // console.log(i);
        localStorage.removeItem(i);
    }
    // console.log("state",state);
    state.forEach((task, i) => {
        // console.log(task)
        myStorage.setItem(`item-${i}`, JSON.stringify( task ));
        // console.log(JSON.stringify( task ))
    });
}

export const controller = function (state = initialState, action) {
    let newState = state.slice();
    switch (action.type) {
        case ADD:
            newState = state.concat({name: action.payload, done: false});
            addToLocalStorage(newState)
            return newState;
        case REMOVE:
            newState = newState.slice(0, action.payload).concat(newState.slice(action.payload + 1));
            addToLocalStorage(newState)
            return newState;
        case TOGGLE:
            newState[action.payload].done = !newState[action.payload].done;
            addToLocalStorage(newState)
            return newState;
        default:
            return state;
    }
}