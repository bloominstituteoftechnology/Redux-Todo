import React from 'react';
import showTodo from './showTodo';

class todoListMain extends React.Component {
  
  render() {
    return (
     <div>
      <form>
        <input placeholder='Add Task...' value={this.state.value} />
        <button type='submit'>Submit</button>
      </form>
      <showTodo />
     </div>
    );
  }
}

export default todoListMain;