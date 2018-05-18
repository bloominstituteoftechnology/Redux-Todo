export const INPUT = 'INPUT';
export const TASK = 'TASK';



export const addTask = (todo) => {
    return { type: INPUT, todo}
};

export const task = (todo) => {
    return { type: TASK, todo}
};