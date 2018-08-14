import {ADDITEM} from '../actions';

const initialState = {
    todos: [
        {
            value: 'default item',
            completed: false
        }
    ]
}
//  'list' is here but can't be named for some reason
export default ( state = initialState, action ) => {
    switch(action.type){
        case ADDITEM:
            let newArr = state.todos.slice()
            newArr.push({value: action.payload, completed: false})
            return Object.assign({}, state, {
              todos: newArr
            });

        default:
            return state
    }
}
