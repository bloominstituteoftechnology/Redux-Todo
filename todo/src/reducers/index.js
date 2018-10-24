import { TO_DO_CREATE, TO_DO_DESTROY, TO_DO_COMPLETE } from '../actions';

const initialState = {
  toDos: [
    {
      id: 0,
      description: '1'
    },
    {
      id: 1,
      description: '2'
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TO_DO_CREATE:
      let newTask = {
        description: action.task,
        id: Date.now()
      }
      return {
        toDos: [...state.toDos, newTask]
      }
    default:
      return state;
  }
};
