import {
          HANDLE_INPUT,
          HANDLE_SUBMIT,
          TOGGLE_COMPLETE,
          DELETE
        } from '../actions';

const initialState = {
  todoList: [
    {
      value: '',
      completed: false
    }
  ],
  inputText: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case HANDLE_INPUT: {
      return {...state, inputText: action.payload };
    }

    case HANDLE_SUBMIT: {
      const newList = [...state.todoList];

      newList.push({
        value: action.payload,
        completed: false
      });

      return {
        ...state,
        todoList: newList,
        inputText: ''
      };
    } /* HANDLE_SUBMIT */

    case TOGGLE_COMPLETE: {
      const newList = [...state.todoList];

      newList[action.payload].completed = !newList[action.payload].completed;

      return[...state, todoList: newList];
    }

    case DELETE_ITEM: {
      const newList = [...state.todoList];

      newList.splice(action.payload, 1);

      return {...state, todoList: newList};
    }

    default: {
      return state;
    }

  }
};
