
const defaultState = {
  todos: []
}

const todos = (state = defaultState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return Object.assign({}, state, {
          todos: [...state.todos,{ text: action.text,completed: action.completed }]
        });
      case 'TOGGLE_TODO':
        return Object.assign({}, state,{
          todos: state.todos.map((e, i)=>{
            if(e && i === action.id){
              e.completed = !e.completed;
            }
            return e;
          })
        });
      case 'REMOVE_TODO':
        return Object.assign({}, state,{
          todos:state.todos.map( (e, i)=>{
            if(i !== action.id){
              return e;
            }
            else{
              return undefined;
            }
  
          })
        });
      default:
        return defaultState;
    }
  }

  export default todos;