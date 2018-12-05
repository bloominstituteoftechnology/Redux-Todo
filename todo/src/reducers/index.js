export const CHANGE_TITLE = "CHANGE_TITLE";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"
//let's go for a test run with a simple "change title function"


const initialState  = localStorage.storedData ?  JSON.parse(localStorage.storedData) :   {
    title: "Hello everyone!",
    todos: [{ todoText: 'Study more React!', completed: false, id:Date.now()} ]
};

const reducer = (state = initialState, action) => {
    let newData = {};
    switch (action.type) {  //what does this syntax mean again? i know it's some sort of action. type is the cases?
    case CHANGE_TITLE:
     newData = {
        ...state, 
        title: action.payload
    };
        localStorage.storedData = JSON.stringify(newData);
        return newData;
    case ADD_TODO:
     newData = {
        ...state, todos: [...state.todos, {todoText: action.payload, completed:false, id:Date.now()}]
        

    }

    localStorage.storedData = JSON.stringify(newData);
    return newData;
    case TOGGLE_COMPLETED:
    // first, we need to loop through the todos
    // find the one we clicked on (button? text? maybe just the div)
    // toggle only that particular todo as complete or not
    newData = {
        ...state, todos: state.todos.map((todo, id) => {
            if (id === action.payload) {

                return {...todo, completed: !todo.completed}
            } else {
                return todo;
            }

        })
        
    }
    localStorage.storedData = JSON.stringify(newData);

    return newData;


    
    default: return state;
    }
  


}

export default reducer;