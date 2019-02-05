export const ACTIONS = {ADD_TODO: 'ADD_TODO', COMPLETE_TODO: 'COMPLETE_TODO', DELETE_TODO: 'DELETE_TODO'};

export const todoAdd = () => ({type: ACTIONS.ADD_TODO, todo: {}});

export const todoComplete = () => ({type: ACTIONS.COMPLETE_TODO, todo: {}});

export const todoDelete = () => ({type: ACTIONS.DELETE_TODO, todo: {}});