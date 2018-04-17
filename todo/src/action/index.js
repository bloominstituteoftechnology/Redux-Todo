export const ADDTODO = 'ADDTODO';
export const REMOVETODO = 'REMOVETODO';
export const GETTODO = 'GETTODO';

export const addtodo = todo => {
    return {
        type: ADDTODO,
        payload: todo,
    }
}

export const removetodo = () => {
    return {
        type: REMOVETODO,
    }
}

export const getToDos = todo => {
    return {
        type: GETTODO,
        payload: todo,
    }
}