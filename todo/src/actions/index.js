let nextId = 0;
export const addTask = text => ({
    type: 'ADD_TASK',
    id: nextId++,
    text
})

export const toggleCompleted = id => ({
    type: 'TOGGLE_COMPLETED',
    id
})