import { ADD, REMOVE, MARKCOMPLETE } from '../actions';
import update from 'immutability-helper';

// Our reducer that handles our two action cases,
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do the count in each case?
export default (todos = [], action) => {
    switch (action.type) {
        case ADD:
            localStorage.setItem('todos', JSON.stringify(todos));
            return [
                 ...todos,
                {
                  id: action.id,
                  text: action.text,
                  completed: false
                }
            ]
        case REMOVE:
            let ns;
            for (let i = 0; i < todos.length; i++) {
              if( action.id == todos[i].id ) {
                ns = update(todos, {$splice: [[i, 1]]});
                break;
              }
            }
            localStorage.setItem('todos', JSON.stringify(ns === undefined ? todos : ns));
            if(ns === undefined) { return todos } else { return ns }
        case MARKCOMPLETE:
            let mk;
            for (let i = 0; i < todos.length; i++) {
              if( action.id == todos[i].id ) {
                const bool = todos[i].completed;
                mk = update(todos, {[i]: {completed: {$set: !bool}}});
                break;
              }
            }
            localStorage.setItem('todos', JSON.stringify(mk === undefined ? todos : mk));
            if(mk === undefined) { return todos } else { return mk }
        default:
            return todos;
    }
};