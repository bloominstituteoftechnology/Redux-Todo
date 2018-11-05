import { ADD_TODO } from './actions';

const initialState = {
    todos: [{}]
}

export default (state = initialState, action) => {
    switch (action.type) {
        // i dont yet get the point of Object.assign() when it works fine with just .concat

        // case ADD_TODO:
        //     return Object.assign({}, { 
        //         todos: state.todos.concat([
        //         {
        //             value: action.payload,
        //             completed: false,
        //         }
        //     ])
        // })

        case ADD_TODO:
            return {
                todos: state.todos.concat([
                    {
                        value: action.payload,
                        completed: false,
                    }
                ])
            }
        default:
            return state;
    }
};