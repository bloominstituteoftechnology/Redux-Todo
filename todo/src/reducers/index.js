const initialState = { todos: [
    {value: 'testing'},
    {value: 'testing2'},
    {value: 'testing3'},
    {value: 'testing4'}
] };



export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADDTODO':
            return {
                // alter this after actions are created
                ...state, todos: state.todos.push(action.payload)
            }; 
        default: 
        return state;
    }; 


}; 