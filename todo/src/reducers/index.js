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

//declare initialState if you want to - I will do this so I have example input to start with

const initialState = {
    name: "task", 
};

const toDoer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
        //this needs to return a function that's an object BASED off of the action it was provided --- 
        //so this needs to take the initialState and concat it to the newState so it returns everything all together
          return state.concat(action.payload);
        
        case 'REMOVE_TASK':
        //this needs to return a function that's an object BASED off of the action it was provided---
        //so this needs to take the initialState and filter the tasks...when it finds the task we want to remove...just say that task is not part of the action.payload
          return state.filter(task => task !== action.payload);
        
        default:
          return state;
    }
};

