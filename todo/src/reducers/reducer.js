import React from 'react'

const initialState = {
  todos: [
    {
      id: 1,
      value: "Buy Valentines Cards",
      completed: false
    },
    {
      id: 2,
      value: "Send Report",
      completed: false
    },
    {
      id: 3,
      value: "Pay Bills",
      completed: false
    },
    {
      id: 4,
      value: "Clean Bathroom",
      completed: true
    }
  ],
  inputText: ""
}

const reducer = (state = initialState, action) => {
      return state;
  }

export default reducer;