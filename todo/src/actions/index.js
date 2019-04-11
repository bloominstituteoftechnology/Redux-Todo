export const ADDTASK = 'ADDTASK';
export const COMPLETE = 'COMPLETE';
export const DELETETASK = 'DELETETASK';


// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).


//To add task in todoList
export const addTask = (task) => {
    return {
        type : "ADDTASK",
        payload : task

    };
};

//To toggle task completed
export const complete = (index) => {
    return {
        type : "COMPLETE",
        payload : index    
    };
};

//To delete task from todoList
export const deleteTask = (index) => {
    return {
        type : "DELETETASK",
        payload : index
    };
};