import React, {useState} from 'react';
import Todo from './Todo';

import {initialState} from './store/reducers/mainReducer';

const Todos = () => {
    const [state] = useState(initialState);
    return (
        <div>
          {state.initialState.map(todo => {
              <Todo todo={todo}
              />
          })}   
        </div>
    )
}

export default Todos;