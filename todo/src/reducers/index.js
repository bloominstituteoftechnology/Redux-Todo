// import Action Tokens
import { SAVETODOITEM, TOGGLETODOITEM, DELETETODOITEM, EDITTODOITEMDETAILS } from '../actions';
// import datas
import { defaultTodoItem, subTodoItem } from '../defaults';

// Reducer
export default (todos = [defaultTodoItem], action) => {
    switch (action.type) {
        case SAVETODOITEM:
            // Fill in the body of this case
            console.log('SAVETODOITEM', todos, action.payload);
            return [].concat(todos, [action.payload.todoItem]);

        case TOGGLETODOITEM:
            // Fill in the body of this case
            console.log('TOGGLETODOITEM', todos, action);
            return todos.map((todo, i) => {
                if (i === action.payload.todoIndex) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });

        case DELETETODOITEM:
            console.log('DELETETODOITEM', todos, action);
            return todos.filter((todo, i) => {
                return i !== action.payload.todoIndex;
            });

        case EDITTODOITEMDETAILS:
            console.log('EDITTODOITEMDETAILS', todos, action);
            return todos.map((todo, i) => {
                if (i === action.payload.todoIndex) {

                }
                return todo;
            });


        default:
            return todos;
    }
};
