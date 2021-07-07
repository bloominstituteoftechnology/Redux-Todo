import React, { Component } from 'react';
import { connect } from 'react-redux';


class Todos extends Component {
    


  render() {
    return (
      <div className="Todos">
         <ul>
            {this.props.todos.map(todo => {
                return(
                    <li key={todo.value}>{todo.value}</li>
                )}
            )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {})(Todos)