export const ACTIONS = {
    HANDLE_INPUT: 'HANDLE_INPUT',
    ADD_TODO: 'ADD_TODO', 
    COMPLETE_TODO: 'COMPLETE_TODO', 
    DELETE_TODO: 'DELETE_TODO',
};

export const handleInput = text => ({type: ACTIONS.HANDLE_INPUT, text: text})

export const todoAdd = () => ({type: ACTIONS.ADD_TODO});

export const todoComplete = () => ({type: ACTIONS.COMPLETE_TODO});

export const todoDelete = () => ({type: ACTIONS.DELETE_TODO});