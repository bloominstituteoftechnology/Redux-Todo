export const ADD_TODOS = 'ADD_TODOS'
export const COMPLETED = 'COMPLETED'
export const DELETE_TODO ='DELETE_TODO'


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
                })};

        // case DELETE_TODO:
        //         return {...state, todos: state.todos.filter( index => {
        //             if(index !== actions.payload) {
        //                 return {todo: index}
        //             }
        //         })}
        default:
            return state;
    }
}