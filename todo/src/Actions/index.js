export const ACTIONS = {
    HANDLE_INPUT: 'HANDLE_INPUT',
    ADD_TODO: 'ADD_TODO', 
    COMPLETE_TODO: 'COMPLETE_TODO', 
    DELETE_TODO: 'DELETE_TODO'
};

// Handle Input
export const handleInput = text => ({type: ACTIONS.HANDLE_INPUT, text: text})

// Add
export const todoAdd = () => ({type: ACTIONS.ADD_TODO});

// Complete
export const todoComplete = () => ({type: ACTIONS.COMPLETE_TODO});

// Delete
export const todoDelete = () => ({type: ACTIONS.DELETE_TODO});

