export const ADDTODOS = 'ADDTODOS';
export const DELETETODOS = 'DELETETODOS';

// These action creators return action packets that the reducer will recieve. 

export const addtodos = () => {
    return {
        type: ADDTODOS
    };
};

export const deletetodos = () => {
    return {
        type: DELETETODOS
    };
};