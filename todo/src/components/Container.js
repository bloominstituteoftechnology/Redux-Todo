import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo, toggle } from '../actions';

class Container extends Component {
    render() {
        return (
          <div>
          <h1>Todo List</h1>
          <ul>
          {this.props.todos.map((todo, index) => {
            return (
              <li key='index'>{todo}</li>
            )
          })
          }
          </ul>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

export default connect(mapStateToProps, { addTodo, toggle })(Container);
