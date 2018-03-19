export const ADDTODO = 'ADDTODO';
export const COMPLETETODO = 'COMPLETETODO';

let todoID = 0;

export const AddTodo = () => {
    return {
        type: 'ADDTODO',
        id: todoID++
    };
};

export const CompleteToDo = todoID => {
    return {
        type: 'COMPLETETODO',
        id: todoID,
    };
}