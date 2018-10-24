// ACTIONS

export const addTodo = todo => { 
    return {
        type: 'ADD-TODO',
        payload: todo
    }
} 

export const markCompleted = index => {
    return {
        type: 'MARK-COMPLETED',
        payload: index
    }
}