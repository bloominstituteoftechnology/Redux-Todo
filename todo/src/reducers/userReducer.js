import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from '../actions';

/* import {
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from '../actions';
 */
const initialState = {
  user: '',
  isLogginIn: false,
  errorLoggingIn: '',
  /*   isRegistering: false,
  errorRegistering: '', */
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_START:
      return {
        ...state,
        isLogginIn: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLogginIn: false,
        user: action.payload,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLogginIn: false,
        errorLoggingIn: action.payload,
      };
    /*     case USER_REGISTER_START:
      return {
        ...state,
        isRegistering: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        user: action.payload,
      };
    case USER_REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        errorRegistering: action.payload,
      }; */
    default:
      return state;
  }
}

export default todoReducer;
