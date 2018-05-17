export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

let id = 0;
export const addTask = task => dispatch => ({                         //dispatch is called when we want to send data
      type: ADD_TASK, //this is called a packet of information       //packet of information is an object with a description of some data 
      payload: task,
  });
  
export const removeTask= task => dispatch =>({
      type: REMOVE_TASK,
      payload: id
    });
  
//action creators go here. These are functions that will create our actions. It defines the function of reducers.
// will usually be of the form:
//      const hereIsMyStore = () => {
//        return{
//              type:  'HERE_IS_MY_TYPE_ACTION'
//              payload: How you want to manipulate the data
//              }
//          };
//          actions are ALL_CAPS and are plan old JS objects. We want as little data in them as possible. They tell us what the reducers will do.
