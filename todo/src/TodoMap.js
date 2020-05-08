import React, { Component } from 'react';
 class TodoMap extends Component {
  render() { console.log(this.props.todos, 'render')
        return (
            <div>
               {this.props.todos.map((todo, index) =>
                <div key={index}>{todo.text}</div>
                )}
                
            </div>
        );
           }
    }
 export default TodoMap