export const ADD = 'ADD';
export const COMPLETED = 'COMPLETED';

export const add = (value) => {
    console.log(value);
    return ({ type: 'ADD', payload: value, completed: false })
};

export const completed = (value) => {
    return ({ type: 'COMPLETED', payload: value, completed: true })
};