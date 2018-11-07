export const ADDTODO = 'ADDTODO';
export const UPDATECOMPLETE = 'UPDATECOMPLETE';

export const addToDo = (todo) => {
    return {
        type: ADDTODO,
        payload: todo
    }
};


export const updateComplete = (id) => {
    return {
        type: UPDATECOMPLETE, payload:id 
    }
}