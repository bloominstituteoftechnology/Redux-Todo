import { ADD_TODO, COMPLETED } from '../actions';

const initialState = {
        todo: [{value: 'breakfast', completed: false}]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
        return {
            ...state,
            todo: state.todo.concat({value: action.text, completed: false})
        };
        case COMPLETED:
        const newTodo = state.todo.map((task, index) => {
            // console.log(task.value + task.completed + index)
            if(index === action.id) {
                task.completed = !task.completed
            }
            // console.log(task.completed)
            return task;
        })
        return {
            todo: newTodo
        };       
        default:
        return state;
    }
};