export const SUBMIT = 'SUBMIT';
export const CLEAR = 'CLEAR';
export const COMPLETED = 'COMPLETED';

export const handleSubmit = (todo) => {
    return {
        type: SUBMIT,
        id: Date.now(),
        payload: todo
    };
};

export const handleClear = (id) => {
    return {
        type: CLEAR,
        payload: id
    };
};

export const handleCompleted = (id) => {
    return {
        type: COMPLETED,
        payload: id
    };
};
