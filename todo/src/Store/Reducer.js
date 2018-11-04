const initialState = {
    todos: [
        {id: 1, content: 'Work on some code'},
        {id: 2, content: 'Work out'},
        {id: 3, content: 'Cook dinner'},
        {id: 4, content: 'Catch up on TV shows'}
      ]
};

const reducer = (state = initialState, action) => {
    const newState = {...state}

    return newState
}


export default reducer;