import {ADD_TASK, REMOVE_TASK} from '../actions/index';
import { initialState } from '../index';

export const taskReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                task: action.payload
            }

        default:
            return state;

    }
}


//the reducers describe how our action will take place. Always will be of some variation of  

//function(previousState, action){
// const newState = previousState.concat(action.payload)
    //return newState
//}

//  This is a copy of our actions to remind ourselves what we are doing - now we want to describe how we will do it

//const addTask = () => {
//     return {
//       type: 'ADD_TASK',
//       payload: `here is a placeholder for now`
//     };
//   };
  
// const removeTask= () => {
//     return {
//       type: 'REMOVE_TASK',
//       payload: `here is a placeholder for now until I figure out what goes here`
//     };
//   };

// const updateTask = ()=> {
//     return{
//         type: 'EDIT_TASK',
//         payload: `here is a placeholder for NOW (edited)`

//declare currentState if you want to - I will do this so I have example input to start with

