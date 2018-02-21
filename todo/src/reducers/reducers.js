import { ADD_TODO, COMPLETE_TODO } from '../actions/actions';

export default (todoState = null, action) => {
    console.log('The Reducer Ran');
    switch (action.type) {
      case Add_TODO:
        return action.payload;
      case COMPLETE_TODO:
        return action.payload;
      default:
        return stateProp;
    }
  };