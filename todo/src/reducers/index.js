//  REDUCER

const initialState = { todos: [
    {value: 'testing'},
    {value: 'testing2'},
    {value: 'testing3'},
    {value: 'testing4'}
] };



export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-TODO':
            return {
                ...state, 
                todos: [...state.todos, action.payload]
            }; 
        default: 
            return state;
    } 
}; 