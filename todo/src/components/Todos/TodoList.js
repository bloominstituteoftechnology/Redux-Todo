import React from 'react';
import Todo from './Todo';

import { connect } from 'react-redux';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({ todos: this.props.todos })
  }

  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <Todo key={todo.text} todo={todo} /> 
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state,
  }
}

export default connect(mapStateToProps)(TodoList);