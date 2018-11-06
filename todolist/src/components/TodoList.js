import React, { Component } from 'react'
import {connect} from 'react-redux';
import {newValue} from './actions';

class TodoList extends Component {

  render() {
    return (
      <div>
       {this.props.todos.map((todo) => {
           return (
                    <div>
                        {todo.todo}
                    </div>
                )
       })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        }
}

export default connect(mapStateToProps, {newValue})(TodoList)