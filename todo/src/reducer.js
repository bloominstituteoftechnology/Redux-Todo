const initialState = {
    todos :[
        {words: 'Buy Lotto Tickets.',
         completed: false}

    ]
};



const reducer = (state= initialState, action) =>{
    switch (action.type){
        case ADD_TODO:
        const newObject = Object.assign({},state);
        newObject.todos.push(action.payload)
        return newObject
        default:
        return state;
    
    return state;
    }
}

export default reducer;