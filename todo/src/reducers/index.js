export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const initialState = []

const reduceTodo = (state = [], action) => {
    console.log(state); 
    switch(action.type){
        case ADD_TODO:
          return state.concat(action.payload)
        case TOGGLE_TODO:
            return state.filter(todo => {
                if (todo.value === action.payload){
                    console.log("found it")
                    todo.completed = !todo.completed;
                }
            }); 
        default:
            return state; 
    }
}

export default reduceTodo; 