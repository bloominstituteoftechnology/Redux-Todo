import {
    HANDLE_INPUT_CHANGE,
    HANDLE_SUBMIT,
    TOGGLE_COMPLETED,
    DELETE_ITEM
  } from '../actions/TodoActions';

  const initialState = {
    todoList: [
      {
        value: null,
        completed: false
      }
    ],
    inputText: ''
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case HANDLE_INPUT_CHANGE: {
        return { ...state, inputText: action.payload };
      }

      case HANDLE_SUBMIT: {
        const newTodoList = [...state.todoList];

        newTodoList.push({
          value: action.payload,
          completed: false
        });

        return {
          ...state,
          todoList: newTodoList,
          inputText: ''
        };
      }

      case TOGGLE_COMPLETED: {
        const newTodoList = [...state.todoList];

        newTodoList[action.payload].completed = !newTodoList[action.payload]
          .completed;

        return { ...state, todoList: newTodoList };
      }

      case DELETE_ITEM: {
        const newTodoList = [...state.todoList];

        newTodoList.splice(action.payload, 1);

        return { ...state, todoList: newTodoList };
      }

      default: {
        return state;
      }
    }
  };