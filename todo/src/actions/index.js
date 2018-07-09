
const CROSS_OFF_TODO = 'CROSS_OFF_TODO';

export const crossOffTodo = todo => {
    return {
        type: CROSS_OFF_TODO,
        payload: todo
    }
}

export default CROSS_OFF_TODO