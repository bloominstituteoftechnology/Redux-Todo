import { ADD, DELETE } from './Actions';

const initialState = {
  items: ["test"]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
    
        let addObj = {...state}
        addObj.items.push(action.placeholder)
        return(addObj);

    case DELETE:
        let delObj = {...state}
        delObj.items.splice(action.placeholder,1)
        return(delObj);


    default:
      return state;
  }
};