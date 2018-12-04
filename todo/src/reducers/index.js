export const CHANGE_TITLE = "CHANGE_TITLE";

//let's go for a test run with a simple "change title function"


const initialState = {
    title: "Hello everyone!",

};

const reducer = (state = initialState, action) => {

    switch (action.type) {  //what does this syntax mean again? i know it's some sort of action. type is the cases?
    case CHANGE_TITLE:
    return {
        ...state, 
        title: action.payload
    };

    default: return state;
    }
  


}

export default reducer;