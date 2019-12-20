import React, { Component } from 'react';

class Todo extends Component {
  render() { 
    console.log(this.props)
    const { todo, id } = this.props.todo
    return ( 
      <div className="item">
      <p onClick={event => this.props.complete(event,id)}>{todo}
      <span onClick={event=>this.props.delete(event, id)}> [x]</span>
      </p>
      </div>
    );
  }
}

export default Todo;