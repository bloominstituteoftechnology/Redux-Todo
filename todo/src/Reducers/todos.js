import { ADD, REMOVE, TOGGLE } from '../actions/todoActions';

export default (todos = [], action) => {

        switch (action.type) {
            case ADD:
                todos =[...todos, actions.payload];
                return todos;
            case REMOVE:
                return [...todos.slice(0, action.payload), ...todos.slice(action.payload+1)];
            case TOGGLE:
            todos = todos.map((todo, index) => {
                    if (index === Number(action.payload)) {
                        return { todo: todo.todos, toggle: !todo.toggle };
                    }
                return todo;
            });
                default:
                return todos
        }
}