export const ADDTODO = 'ADDTODO';
export const TOGGLETODO = 'TOGGLETODO';

let todoID = 0;

export const addtodo = todo => {
    return {
        type: ADDTODO,
        payload: {
            todo: todo,
            complete: false,
            id: todoID++
        }
    }
}

export const toggletodo = id => {
    return {
        type: TOGGLETODO,
        payload: id
    }
}
