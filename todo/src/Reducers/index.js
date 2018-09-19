import { ACTIONS } from '../Actions';

const initialState = {
    todos:[
        {
        id: 0,
        text: 'I am the first Todo!',
        completed: false
        }, 
        {
        id: 1,
        text: 'I am the second Todo!',
        completed: false
        }, 
        {
        id: 2,
        text: 'I am the third Todo!',
        completed: false
        }],

    currentInputText: '',
    currentlyTyping: false
}

const todoReducer = (state = initialState, action) => {
    let updateTodoList = [...state.todos];

    switch(action.type) {
        case ACTIONS.HANDLE_INPUT:
        console.log('input handled:', state.currentInputText);
        let isTyping = true;
        if(!action.target.value) {
            isTyping = false;
        }

        return {...state, currentInputText: action.text, currentlyTyping: isTyping};

        case ACTIONS.ADD_TODO:
        console.log('add');

        if (!state.currentInputText) {
        return state;
        } 
        return {...state, 
            todos:
            [...state.todos, 
            {
                id: Date.now(), 
                text: state.currentInputText, 
                completed: false
            }], 
            currentInputText: '',
            currentlyTyping: false
            };

        case ACTIONS.COMPLETE_TODO:
        console.log('complete');
        updateTodoList.forEach(todo => {
            if(todo.id === Number(action.id)){todo.completed = !todo.completed;}
            console.log(todo.id, Number(action.id));
        })
        console.log(updateTodoList);
        console.log(state.todos)
        return {...state, todos: [...updateTodoList]};

        case ACTIONS.DELETE_TODO:
        console.log('delete');
        updateTodoList = updateTodoList.filter(todo => todo.completed === false);
        return {...state, todos: [...updateTodoList]};

        default: 
        console.log('default');
        return state;
    }
}

export default todoReducer;