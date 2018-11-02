export default (stateProp = null, action) => {
    console.log("hello, in active-todo.js");
    switch (action.type) {
        case 'TODO_SELECTED':
            return action.payload;
        default:
            return stateProp;
    }
};