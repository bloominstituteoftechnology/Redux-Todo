import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

class TodoList extends React.Component{

    render() {
        return (
            <div>
              {this.props.todos.map(todo => {
                  return (
                      <Todo comment={todo.value} complete={todo.complete} Id={todo.Id} />
                  )
              })}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
      todos: state
    }
  }
  
export default connect(mapStateToProps)(TodoList);
  
