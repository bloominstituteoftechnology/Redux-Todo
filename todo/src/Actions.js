export const Add_TODO = "Add_TODO";


export function addTodoList(text) {
    let newTodo = {
        name: text,
        completed: false
    }
    return {
        type: Add_TODO, payload: newTodo
    }
}
