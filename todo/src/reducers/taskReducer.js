import {ADD_TASK, TOGGLE_COMPLETE} from '../actions/actions';
import './reducer.css'


//the reducer will be used to add tasks to the list of todo items
//reducer makes up the state of the app
//actions get passed into the reducer to update the state

// const initialState = [
//     {   task: 'Be Good at Redux', 
//         completed: false,
//         id: Date.now()
//     },

//     {   task: 'Be a Professional Athlete', 
//     completed: false,
//     id: Date.now()
//     },

//     {   task: 'Find Valuable Things on the Beach', 
//     completed: false,
//     id: Date.now()
//     },

//     {   task: 'Be a Charming and Compelling Person', 
//     completed: false,
//     id: Date.now()
//     },


//     {   task: 'Make Amazing Bento Boxes and Post Pictures on Pinterest', 
//     completed: false,
//     id: Date.now()
//     },

// ]



//todo reducer will add tasks to the list

export default (tasks = [], action) => {
    switch(action.type){ //switch is a javascript function that operates like an if else statement
        case ADD_TASK:
            return tasks.concat(action.payload); //concat function adds an aditional item to the array of tasks
        case TOGGLE_COMPLETE:
            tasks[action.payload].complete = !tasks[action.payload].complete;    
            return tasks;
        default:
           return tasks;
    }     
};

