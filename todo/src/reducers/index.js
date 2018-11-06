import { ADD } from '../actions';




const initialState = {
    todo: ['Ready','Set', 'Go']
  }

  export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
        return {}
      default:
        return state
          };
    };