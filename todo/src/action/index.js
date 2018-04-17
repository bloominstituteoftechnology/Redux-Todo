export const ADDTODO = 'ADDTODO';

export const addtodo = todo => {
    return {
        type: ADDTODO,
        payload: todo, 
    }
}