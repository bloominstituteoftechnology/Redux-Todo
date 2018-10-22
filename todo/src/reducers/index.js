import ADD_NEW_TODO from '../actions/index';

const initialState = {
    input : '',
}

const addNewTodo = (state = initialState, action) => {
    switch(action.type){
        case ADD_NEW_TODO : return{...state, input : action.payload};
        default : return state;
    }
}

// reducers use switch statements
//take in action.type