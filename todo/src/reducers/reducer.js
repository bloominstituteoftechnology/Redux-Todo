import {ADD} from '../actions/actions';

const initialState = {
    todos: [{
        id: 0,
        task: 'Walk Dog',
        completed: false
    }],
}

export default (state = initialState, action) => {
    switch (action.type){
        case ADD:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {id: state.todos.length + 1,
                    task: action.input,
                    completed: false}
                ]
            })

        default:
            return state
    }
}