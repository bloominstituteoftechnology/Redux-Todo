//action creators go here. These are functions that will create our actions. It defines the function of reducers.
// will usually be of the form:
//      const hereIsMyStore = () => {
//        return{
//              type:  'HERE_IS_MY_TYPE_ACTION'
//              payload: How you want to manipulate the data
//              }
//          };
//          actions are ALL_CAPS and are plan old JS objects. We want as little data in them as possible. 
//
//}
//          
//
const addTask = () => {
    return {
      type: 'ADD_TASK',
      payload: task
    };
  };
  
const removeTask= () => {
    return {
      type: 'REMOVE_TASK',
      payload: task
    };
  };

const updateTask = ()=> {
    return{
        type: 'EDIT_TASK',
        payload: updatedTask    
    };
}