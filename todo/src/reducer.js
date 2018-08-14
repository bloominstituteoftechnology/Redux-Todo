import { createStore} from 'redux';
import {ADD_TASK} from './actions';


//the reducer will be used to add tasks to the list of todo items
//reducer makes up the state of the app
//actions get passed into the reducer to update the state

const initialState = {
    tasks: [
        {
        task: "complete to do list",
        completed: false
        },

        {task: "review redux",
        completed: false
        },
    ]
};

//todo reducer will add tasks to the list

const taskReducer = (state = initialState, action) => {
    console.log(state);
    switch(action.type){ //switch is a javascript function that operates like an if else statement
        case ADD_TASK:
            return state.tasks.push(action.payload); //concat function adds an aditional item to the array of tasks
        default:
           return state;
    }     
};

const store = createStore(taskReducer);

store.subscribe(()=> {
    console.log(store.getState());
})

//dispatch takes an object that will have properties:
//type - description of change that took place
//payload - data that is changing in the state
store.dispatch({ type:  'ADD_TASK', payload: 'newTask'});


export default taskReducer;