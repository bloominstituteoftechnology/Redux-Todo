export const ADD_TODO = 'TODO_LIST';
export const COMPLETE_TOGGLE = 'TODO_ITEM';



export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    };
}


export const completeToggle = id => {
    return {
        type: COMPLETE_TOGGLE,
        payload: id
    };
}