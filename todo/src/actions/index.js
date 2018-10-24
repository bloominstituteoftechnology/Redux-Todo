export const ADD_TO_LIST = 'ADD_TO_LIST';

export const addtolist = item => {
    console.log(item)
    return {
        type: 'ADD_TO_LIST',
        payload: item
    };
};