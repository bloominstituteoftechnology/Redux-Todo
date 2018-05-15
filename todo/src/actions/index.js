export const FETCH_TODOS = "FETCH_TODOS";
export const ADD_TODO = "ADD_TODO";

export const fetchTodos = () => {
  return {
    type: FETCH_TODOS,
    payload: [
      {
      value: "Laundry",
      completed: false
     },

    {
      value: "Homework",
      completed: false
    }, 

    {
      value:"Exercise",
      completed: false
    },

    {
      value: "Dishes",
      completed: false
    },
    
    {
     value: "Shopping",
     completed: false,
    },
    
    {
      value: "Walk dog",
      completed: false
    }
  ]

  };
};


export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: {value: todo, completed: false}
  };
};





