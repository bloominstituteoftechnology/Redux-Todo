import React, { Component } from 'react'
import {connect} from 'react-redux';
import {newValue} from './actions';

class TodoList extends Component {

  render() {

    console.log(this.props)
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
  console.log(state)
    return {
        todos: state,
        }
}

export default connect(mapStateToProps, {newValue})(TodoList)