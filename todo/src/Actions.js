export const Add_TODO = "Add_TODO";


export function addTodoList(text) {
    let newTodo = {
        name: Text,
        completed: false
    }
    return {
        type: Add_TODO, payload: newTodo
    }
}
