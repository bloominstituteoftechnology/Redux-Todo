export const reducer = (state = [{value: 'Clean car', complete: false}], action) => {
    switch (action.type) {
        case 'ADD':
            return state.concat(action.payload);
        case 'REMOVE':
            return state.filter(todo => todo.value !== action.payload.value);
        case 'COMPLETE':
            return state.map(todo => {
                if(todo.value === action.payload.value) {
                    todo.complete = !todo.complete
                    return todo;
                }
                else return todo;
            })
        default:
            return state;
    }
};