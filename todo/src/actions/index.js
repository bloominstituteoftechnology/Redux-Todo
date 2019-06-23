export const CREATETODO = 'CREATETODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_COMPLETE = 'DELETE_COMPLETE';

export const addItem = item => {
    return {
        type: CREATETODO,
        payload: item
    };
};

export const toggleCompleted = index => {
    return {
        type: TOGGLE_COMPLETE,
        payload: index
    }
}

export const deleteCompleted = () => {
    return{
        type: DELETE_COMPLETE,
    }
}