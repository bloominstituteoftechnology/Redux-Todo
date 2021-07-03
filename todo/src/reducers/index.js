import { ADD, DELETE } from '../actions/'



export default (
    state = [], action) => {
    switch (action.type) {
        case ADD:
            //update the todoList and reset the newTodo 
            return [...state, action.todo];
        case DELETE:
            //remove the todo at the selected index
            console.log('sucesss')
            return
        default: 
            return state;
    }
}