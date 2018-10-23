// ACTIONS

export const AddTodo = todo => { 
    console.log('inside AddTodo action');
    return {type: 'ADD-TODO',
            payload: todo}
} 
