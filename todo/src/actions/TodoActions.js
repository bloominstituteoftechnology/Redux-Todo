export const TODO_ACTION = 'TODO_ACTION';
export const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE';
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';

export const todoActionCreator = () => {
    return {
        type: TODO_ACTION
    };
};

export const handleInputChange = value => {
    return {
        type: HANDLE_INPUT_CHANGE,
        payload: value
    };
};

export const handleSubmit = value => {
    return {
        type: HANDLE_SUBMIT,
        payload: value
    }
};
