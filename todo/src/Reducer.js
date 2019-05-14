export const ADD = 'ADD';
export const DELETE = 'DELETE';


const initialState = {
  items: ["test"]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
        return {
            ...state,
            items: [...state.items, action.payload]
          };

    case DELETE:
        const newArray = state.items.filter((e,index) => (index!==action.payload))
        return({items:newArray})


    default:
      return state;
  }
};