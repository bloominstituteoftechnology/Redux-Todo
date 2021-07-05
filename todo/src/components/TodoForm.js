import React from 'react';

const TodoForm = props => {
  return (
    <div>
      <form>
        <li>
          <input
            name="todoValue"
            type="text"
            value={props.todoValue}
            onChange={props.handleInputChange}
            placeholder="Add todo"
          />
          <button onClick={props.addTodo}>Add Todo</button>

        </li>
      </form>
    </div>
  );
};

export default TodoForm;
