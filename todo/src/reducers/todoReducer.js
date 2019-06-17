import { ADD_TODO,TOGGLE_TODO } from '../actions/index';
const intialState = [
    {id : 0,
    text : 'testing Redux',
    completed : false}]
//implementing todoReducer
const todos = (state = intialState , action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state , {
                id : action.id,
                text : action.text,
                completed : action.completed
            }]
        case TOGGLE_TODO:
            return state.map( todo =>
                        ( todo.id === action.id ) ? { ...todo, completed : !todo.completetd} : todo )
        default:
            return state
    }
}

export default todos;