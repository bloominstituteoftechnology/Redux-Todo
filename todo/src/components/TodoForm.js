import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <form action="submit">
          <input type="text" />
          <input type="button" value="Add Todo" />
        </form>
      </div>
    );
  }
}

export default TodoForm;