export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const initialState = []

const reduceTodo = (state = [], action) => {
    console.log(state); 
    switch(action.type){
        case ADD_TODO:
          return state.concat(action.payload)
        case TOGGLE_TODO:
            return state.map((todo) => todo.value!== action.payload? todo : 
              Object.assign({}, todo, {completed: !todo.completed})
            )
        default:
            return state; 
    }
}

export default reduceTodo; 