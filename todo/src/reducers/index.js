import { NEWTODO, COMPLETE, DELETE, INITIAL, DELETEALL, DELETECOMPLETED, COPY } from '../actions';

export default (todo = [], action) => {
    switch(action.type) {
        case NEWTODO:
            return [
                ...todo,
                action.payload
            ]
        case COMPLETE:
            todo[action.payload].completed = !todo[action.payload].completed;
            const changed = todo.map(i => i);
            return changed;
        case DELETE:
            const deleted = todo.map(i => i)
            deleted.splice(action.payload, 1);
            return deleted;
        case INITIAL:
            const stored = localStorage.getItem('items');
            if (stored !== null & stored !== undefined) return JSON.parse(stored);
            return null;
        case DELETEALL:
            return todo = [];
        case DELETECOMPLETED:
            const filtered = todo.filter(i => !i.completed);
            return filtered;
        case COPY:
            const copied = todo.map(i => i);
            const item = todo[action.payload];
            copied.push(JSON.parse(JSON.stringify(item)));
            copied[copied.length - 1].completed = false;
            localStorage.setItem('items', JSON.stringify(copied))
            return copied;
        default:
            return todo;
    }
}