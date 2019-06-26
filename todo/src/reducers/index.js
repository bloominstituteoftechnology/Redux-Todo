import {ADD_TODO, TOGGLE_COMPLETED} from '../actions/index';

const initialTodos = {
    todos: [
        {
            value: 'walk the dog',
            completed: false
        }, 
        {
            value: 'take out the trash', 
            completed: false
        }
    ]
}

const todosReducer = (state = initialTodos, action) => {
    switch(action.type) {
        case ADD_TODO:
            return state.concat(action.payload);
        // case ADD_TODO:
        //     return {todos:state.concat(action.payload)};
        case TOGGLE_COMPLETED:
            return Object.assign({}, state, {todos:action.payload});
        default:
            return state;
    }
}

export default todosReducer;

// When the user presses submit you will invoke the appropriate action creator 
// which will then have its new action fed through all of the reducers.

// When you click on each todo list item you will dispatch an action 
// that will toggle that todo item's completed property to either true 
// or false. You will need to send the id property along with what completed 
// should be set to. The todos reducer will return a brand new array that 
// will replace the old array. We do not mutate the original array but 
// rather replace it with a brand new version.

// You should only need one reducer. This reducer will control the todos 
// array property on the state tree.