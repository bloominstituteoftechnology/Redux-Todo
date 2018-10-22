const initialState = {
  tasks: [
    {
      id: 0,
      task: 'Clean Room',
      completed: false
    },
    {
      id: 1,
      task: 'Run',
      completed: false
    },
    {
      id: 2,
      task: 'Read book',
      completed: false
    },
    {
      id: 3,
      task: 'Pay Credit Card bill',
      completed: false
    },
    {
      id: 4,
      task: 'Buy lotto ticket',
      completed: false
    }
  ]
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default taskReducer;
