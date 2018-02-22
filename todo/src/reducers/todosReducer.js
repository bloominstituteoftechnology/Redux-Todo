// import {NEW_TODO_ITEM, TOGGLE_TODO_ITEM, DELETE_TODO_ITEM} from '../actions';

// export default (todos = [], action) => {
//     switch (action.type) {
//         case NEW_TODO_ITEM:
//             console.log('added');
//             return todos.concat(action.payload);
//         case TOGGLE_TODO_ITEM:
//             console.log('completed');  
//             // const newTodos = todos.slice(0);
//             const newTodos = [...todos];
//             newTodos[action.payload].completed = !newTodos[action.payload].completed;
//             return newTodos;
//             // return todos.map(
//             //     (todo, index) =>
//             //       action.index === index
//             //         ? { value: todo.value, completed: !todo.completed }
//             //         : todo
//             //   )
//             case DELETE_TODO_ITEM:
//                 console.log('deleted', action.id);
//                 return todos.filter(todo => todo.id !== action.id);
//         default:
//             return todos;
//     }
// }