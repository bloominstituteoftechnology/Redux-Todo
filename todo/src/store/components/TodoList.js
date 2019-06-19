import React from 'react';

import Todo from './Todo';
import './TodoList.scss';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div>
        {this.state.todos.map(todo => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    );
  }
}

export default TodoList;
