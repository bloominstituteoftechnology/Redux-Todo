import React from 'react';
import { connect } from 'react-redux';
import { toggleComplete } from '../actions/Action';

import TodoItem from './TodoItem';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleToggleComplete = id => {
    // console.log('clicked');
    // console.log('target:', id);
    this.props.toggleComplete(id);
  };

  render() {
    return (
      <div className="todo-container">
        <h1>Todo List</h1>
        {console.log('state:', this.props.state)}
        {this.props.state.map(item => {
          return (
            <div
              className="todo-item"
              key={item.id}
              onClick={() => this.handleToggleComplete(item.id)}
              style={
                item.completed
                  ? {
                      color: 'gray',
                      textDecoration: 'line-through',
                      backgroundColor: 'rgb(240,240,240)'
                    }
                  : null
              }
            >
              <p>{item.value}</p>
            </div>
          );
        })}
      </div>
    );
    // console.log(this.props.state);
  }
}

const mapStateToProps = state => {
  //   console.log(state);
  return { state: state.todoList };
};

export default connect(
  mapStateToProps,
  { toggleComplete }
)(TodoContainer);
