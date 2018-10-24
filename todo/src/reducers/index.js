import { ADDTASK, COMPLETE, DELETETASK } from '../actions';

const initialState = {
    todos : [
        {
            task : 'Walk the dog.',
            completed : false
        },
        {
            task : 'Sprint Challenge',
            completed: false,
        },
    ]
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?

export default (state = initialState, action) => {
    console.log("At reducer  : ",state);
  switch (action.type) {
    case 'ADDTASK' :
    
    console.log("ADDTASK  : ",Object.assign({}, state, { todos : [...state.todos, action.payload] }));
        return Object.assign({}, state, { todos : [...state.todos, action.payload] });

    case 'COMPLETE' :
        return Object.assign({}, state, {todos : state.todos.map((task, index) => {
                                                                        if(index === action.payload) {
                                                                                    return Object.assign({}, task, {completed: !task.completed})
                                                                        }
                                                            return task })
                                        }
                            );	
         
    case 'DELETETASK' :
        return Object.assign({}, state, {todos : state.todos.filter((task, index) =>
                                                            index !== action.payload)} );
        
    default:
    console.log("At default  : ",initialState.todos);
        return initialState.todos
  }
};

