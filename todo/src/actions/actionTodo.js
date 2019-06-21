export const ADD_ITEM= 'ADD_ITEM';
export const GET_ITEMS= 'GET_ITEMS';

//ACTION CREATORS

export const addItem= todo => {
    return {
        type:ADD_ITEM,
        payload:todo
    };
};

export const getItems= todos => {
    return {
        type:GET_ITEMS,
        payload:todos
    };
};

