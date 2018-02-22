import React from 'react';
import { connect } from 'react-redux';
import { add_todo, update_completed, delete_item } from '../actions/index.js';

import './todo.css';

class ToDo extends React.Component {
  state = {
    todo: '',
  };

  render() {
    return (
      <div>
        <h1 className="header"> To Do List </h1>
        <div className="list">
          <ul style={{ width: '100%' }}>
            {this.props.todos.map((item, index) => {
              return (
                <div
                  style={{
                    marginBottom: '5px',
                    display: 'flex',
                    flexFlow: 'row',
                    padding: '5px',
                    border: '2px solid blue',
                  }}
                  key={item.id}>
                  <button
                    style={{ marginLeft: '5px' }}
                    onClick={() => this.props.delete_item(index)}>
                    delete
                  </button>
                  <li style={{ margin: '5px' }} onClick={() => this.props.update_completed(item)}>
                    {item.todo}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="list">
          <input
            type="text"
            name="todo"
            value={this.state.todo}
            placeholder="Enter New Item Here"
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddClick}>Add to the List</button>
        </div>
      </div>
    );
  }

  handleInputChange = event => {
    const todo = event.target.value;
    this.setState({ todo: todo });
  };
  handleAddClick = () => {
    if (this.state.todo === '') return alert('Fill Out Your ToDo');
    else {
      this.props.add_todo(this.state.todo);
      this.setState({ todo: '' });
    }
  };
}

const mapStateToProps = state => {
  console.log('State: ', state);
  return {
    todos: state,
  };
};

export default connect(mapStateToProps, {
  add_todo,
  update_completed,
  delete_item,
})(ToDo);
