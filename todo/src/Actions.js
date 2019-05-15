export const Add_TODO = "Add_TODO";
export const TOGGLETODO = "TOGGLE_TODO";


export function addTodoList(text) {
    let newTodo = {
        name: text,
        completed: false
    }
    return {
        type: Add_TODO, payload: newTodo
    }
}

export function toggleTodo(name){
    return{
        type:TOGGLETODO,
        name
    };
}
