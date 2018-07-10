export const SUBMIT = 'SUBMIT';
export const CLEAR = 'CLEAR';
export const COMPLETED = 'COMPLETED';

export const handleSubmit = e => {
    return {
        type: SUBMIT,
        payload: e.target.value
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
