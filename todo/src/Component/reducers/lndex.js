export  const ADD_TODOTASK = 'ADD_TODOTASK';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_TASK = 'DELETE_TASK';



const initState ={
  stuffToDo: [{
    aTask: 'Walk the dog.',
    taskCompleted: false
  }, { aTask: 'Clean.', taskCompleted: false }]

};

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODOTASK:
      return {
        ...state,
        stuffToDo: [...state.stuffToDo, { aTask: action.payload, taskCompleted: false }]
      };
    case TOGGLE_COMPLETED:
      return {
        stuffToDo: state.stuffToDo.map((eachTask, index) => {
          if (index === action.payload) { 
            return {
              ...state,
              stuffToDo: state.stuffToDo.map((eachTask, index) => {
                if(index === action.payload) {
                  return { ...eachTask, taskCompleted: !eachTask.taskCompleted};
                } else {
                  return eachTask;
                }
              })
            };
          }
        })
      }
    case DELETE_TASK:
      return {
        ...state,
        stuffToDo: state.stuffToDo.filter(eachTask => eachTask.taskCompleted === true)
        };

    default:
      return state;
  }
};


export default Reducer;

