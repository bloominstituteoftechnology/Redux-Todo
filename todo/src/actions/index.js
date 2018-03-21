//two actions - add and toggle
export const NEW_TODO = 'NEW_TODO'; //action types defined
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addTodo = (todo) => {  //action creator - returns action package
    return{
        type: NEW_TODO,
        payload: todo  // pass of to reducer to add to state
    }
}
export const toggleComplete = (index) => {  //taking index to know where to toggle. passing payload
    return {
        type: TOGGLE_COMPLETE,
        payload: index
    }
}