// import { } from '../action/actions';

// rxreducer
const initialState = {
    todo:[ ]
}
export default (state = initialState, action) => {
  switch (action.type) {

  case typeName:
    return { ...state }

  default:
    return state
  }
}
