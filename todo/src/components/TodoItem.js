import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-item">
        <p>{this.props.text}</p>
        {/* <p className="delete-btn">X</p> */}
      </div>
    );
  }
}

export default TodoItem;
