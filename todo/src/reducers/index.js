export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TRASH_TODO = 'TRASH_TODO'; 

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
        case TRASH_TODO:
            return state.filter(todo => todo.value !== action.payload)
        default:
            return state; 
    }
}

export default reduceTodo; 