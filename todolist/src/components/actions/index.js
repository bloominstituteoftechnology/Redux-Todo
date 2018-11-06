export const NEW_TODO = 'NEW_TODO';





export const newValue = (newTodo) => {
    return {type: NEW_TODO, payload: { todo: newTodo}}
}