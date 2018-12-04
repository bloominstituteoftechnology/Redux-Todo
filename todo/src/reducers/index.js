export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const initialState = {
  todos: [{todo: "test", completed: false}]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { todo: action.payload, completed: false }]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((item, index)=>{
            if(index === action.payload){
                return { ...item, completed: !item.completed};
            }else{
                return item;
            }
        })
      };
    default:
      return state;
  }
};



//action.payload.id