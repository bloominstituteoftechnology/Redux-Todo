// Todo .map will go here 
import React, { Component } from 'react';

class TodoMapper extends Component {
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




export default TodoMapper

// class component for local state ie this.state, local methods and key word this ie this.props
// functional when not using above, just props and not this