import React from 'react';

export default class Todo extends React.Component {

  /* methods */

  handleInput(e) {
    e.preventDefault();

    this.props.handleInput(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.handleSubmit(e.target[0].value);
  }

  render() {
    return
      <ul>
        {this.props.todoList.map((item, i) => (
          <div key = {`item-div-${i}`}>
            <li id = {i}
                onClick = {e => this.props.toggleComplete(e.target.id)}
                key = {`item-li-${i}`}
                className = 'todo-item'
            >
            {item.value}
            </li>
            <span key= {`item-span-${i}`}
                  onClick= {() => this.props.deleteItem(i)}
            >
            X
            </span>
          </div>
        ))}
      </ul>

      <form onSubmit = {e => this.handleSubmit(e)}>
      <input value={this.props.inputText}
             onChange= {e => this.handleInput(e)}
      />
  }
}
