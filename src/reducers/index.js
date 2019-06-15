const initialState = {
  todos: []
  
}


const todoReducer = (data=initialState, action) => {

  switch (action.type) { 
    case "ADD_ITEM":
    return Object.assign({}, data, { todos:[
          ...data.todos,
          {
            content: action.content,
            completed: false
          }
        ]
      });

    case "DELETE_ITEM":   
	return Object.assign({}, data, {todos:data.todos.filter((item, index) => index !== action.index 
	
	)});

	  
    case "CLEAR_COMPLETED":
        return Object.assign({}, data, {todos:data.todos.filter((item, index) => item.completed === false
        
        )});	 	  
	  
		  
    case "TOGGLE_STATE":
    return Object.assign({}, data, {todos:data.todos.map((item, index) => {
    	if(index === action.index) {
		
	return Object.assign({}, item, {
          completed: !item.completed 
	})}
	    return item
     
    })});		  

    default:
      return data;
  }
};

export default todoReducer;
