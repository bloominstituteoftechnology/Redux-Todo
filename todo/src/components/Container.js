import React, { Component } from "react";
import { connect } from 'react-redux';
import { addtodo, toggle } from '../actions';

class Container extends Component {

    render() {
        return (
          <div>
          <h1>Todo List</h1>
          <ul>
          {this.props.todos.map((todo) => {
            return (
              <li key={id}>{todo}</li>
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

export default connect(mapStateToProps, { addtodo, toggle })(Container);
