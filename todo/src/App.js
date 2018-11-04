import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markDone } from './actions';

const style = { textDecoration: 'line-through' };

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <li
              style={todo.completed ? style : null} 
              key={todo.id} 
              onClick={() => this.props.markDone(todo.id) }
            >
              {todo.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    todos: state.todos
  }
)

export default connect(mapStateToProps, { markDone })(App);
