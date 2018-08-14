export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
const initialState = []

const reduceTodo = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
          return state.concat(action.payload)
        case TOGGLE_TODO:
            return state.map((todo) => todo.value!== action.payload? todo : 
              Object.assign({}, todo, {completed: !todo.completed})
            )
        case REMOVE_TODO:
            return state.filter(todo => todo.completed !== true)
        default:
            return state; 
    }
}

export default reduceTodo; 