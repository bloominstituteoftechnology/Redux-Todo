export const SUBMIT = 'SUBMIT';
export const CLEAR = 'CLEAR';
export const COMPLETED = 'COMPLETED';

export const handleSubmit = todo => {
    return {
        type: SUBMIT,
        payload: todo
    };
};

export const handleClear = () => {
    return {
        type: CLEAR
    };
};

export const handleCompleted = () => {
    return {
        type: COMPLETED
    };
};
