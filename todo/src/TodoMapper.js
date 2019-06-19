// Todo .map will go here 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleStrikeAction } from './actions'

class TodoMapper extends Component {

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

   toggleHandler = e =>{
      this.props.toggleStrikeAction(this.props.index)
   }
    
// add toggle action input handler? then on the mapping add onclick => handler, pull by ID or index
  render() { console.log(this.props.todos, 'render')
        return (
            <div>
               {this.props.todos.map((todo, index) =>

                <div key={index}
                     style={ todo.completed ? {textDecoration: 'line-through'} : null }
                >
                 {todo.text}

               <button onClick={() => {this.toggleHandler(todo.index)}}>Complete!</button>
                 <button>Remove your Todo(to be added)</button>
                  </div>
                )}
               
            </div>
         )
                
    }
    
    
}
const mapStateToProps = (state) => {
    console.log(state, 'state return mapper')
    return { todos: state.todos};
}

// export default TodoMapper
export default connect(mapStateToProps, {toggleStrikeAction})(TodoMapper)

// [mapStateToProps(state, [ownProps]): stateProps] (Function): 
// If this argument is specified, the new component will subscribe to Redux store updates.
// This means that any time the store is updated, mapStateToProps will be called.
// The results of mapStateToProps must be a plain object,
// which will be merged into the component’s props. 
// If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.



// class component for local state ie this.state, local methods and key word this ie this.props
// functional when not using above, just props and not this
