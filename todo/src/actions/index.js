export const SUBMIT = 'SUBMIT';
export const CLEAR = 'CLEAR';
export const COMPLETED = 'COMPLETED';

export const handleSubmit = (todo) => {
    return {
        type: SUBMIT,
        payload: todo
    };
};

export const handleClear = (todo) => {
    return {
        type: CLEAR,
        payload: todo
    };
};

export const handleCompleted = (todo) => {
    return {
        type: COMPLETED,
        payload: todo
    };
};
