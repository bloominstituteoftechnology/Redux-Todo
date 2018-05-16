export const ADDITEM = 'ADDITEM';
export const TOGGLEITEM = 'TOGGLEITEM';

export const addItem = () => {
    return {
        type: ADDITEM,
        payload: 1
    };
};

export const toggleItem = () => {
    return {
        type: TOGGLEITEM,
        payload: 1
    };
};

