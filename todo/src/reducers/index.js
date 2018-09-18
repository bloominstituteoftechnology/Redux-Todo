

const todos = (todos = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...todos, action.payload ]
    }
  }
  
  export default todos
  