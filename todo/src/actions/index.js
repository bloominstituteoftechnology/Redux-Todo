export const CREATETODO = 'CREATETODO';

export const addItem = item => {
    return {
        type: CREATETODO,
        payload: item
    };
};

