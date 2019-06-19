export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_STRIKE = 'TOGGLE_STRIKE'
export const DELETE_ACTION = 'DELETE_ACTION'

export const addTodoAction = (item) => {
    return { type: ADD_TODO, payload: item};
}

export const toggleStrikeAction = (index) => {
    return { type: TOGGLE_STRIKE, payload: index};
}
// payload should be index or id? calling array item by index

export const deleteAction = (item) => {
    return { type:DELETE_ACTION, payload: item};
}



// do I need to use item? This will connect with a button. 
// I'm thinking no since it wil be delivering "nothing" but not sure