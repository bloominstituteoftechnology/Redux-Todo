import { ADD_TODO, TOGGLE_TODO } from '../actions/actions';

const initialState = [
    { task: 'Complete Todo', completed: false, id: Date.now() }
]

export default (state = initialState, action) => {
  switch(action.type){
    case ADD_TODO:
        return state.concat(action.payload);
    case TOGGLE_TODO:
       return state.map(todo => {
         if (todo.id === action.payload) {
           return Object.assign({}, todo, { completed: !todo.completed })
    }
    return todo
});
        default: 
           return state;
}
};