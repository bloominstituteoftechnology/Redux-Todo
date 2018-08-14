export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const initialState = {todo: []}

const reduceTodo = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
          return state.todo.push(action.payload)
        case TOGGLE_TODO:
            return state; 
        default:
            return state; 
    }
}

export default reduceTodo; 