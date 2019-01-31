import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {

  const addTodo = () => {
    console.log('hi')
  }

  return(
    <div>
      <ul>
        {/* {this.props.state.map(todo => {
          <Todo key={todo.id} todo={todo} />
        })} */}
      </ul>
      <form> 
        <imput type="text" value={this.props.state.newTodo} />
        <button type="button">Add Todo</button> 
      </form>
    </div>
  );

}

export default TodoList;