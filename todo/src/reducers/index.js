export const ADD_TODOS = 'ADD_TODOS'
export const COMPLETED = 'COMPLETED'
const intitialState = {
    todos: [
        {
            value: 'Learn React',
            complete: false
        }
    ]
}

export default (state = intitialState, actions) => {
    switch(actions.type) {
        case ADD_TODOS:
            return {...state, todos: 
                [...state.todos, {
                    value: actions.payload, 
                    complete: false
                }]};

        case COMPLETED: 
                return {...state, todos: state.todos.map((todo, index) => {
                    if(index === actions.payload) {
                        return {...todo, complete: !todo.complete};
                    } else {
                        return todo;
                    }
                })}
        default:
            return state;
    }
}