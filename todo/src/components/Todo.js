import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, clearCompleted } from '../actions'


class Todo extends React.Component {
  state = {
    newTodo: ''
  }

  handleChange = e => {
    this.setState({ newTodo: e.target.value })
  }

  addTodo = e => {
    e.preventDefault()
    this.props.addTodo(this.state.newTodo)
    this.setState({ newTodo: '' })
  }

  toggleTodo = (e, index) => {
    e.preventDefault();
    this.props.toggleTodo(index)
  }


  removeTodo = (e) => {
    e.preventDefault();
    this.props.clearCompleted()
  };


  render() {
   console.log('PROPS from TODO.JS', this.props)
    return(
      <div>
       <h2>TODO APP</h2>
            <div className="friends-list">
             {this.props.todos.map((todo, index) => (
              <h4 
                onClick={e => this.toggleTodo(e, index)} 
                key={index}
                className={`${todo.completed ? "completed" : " "}`}
              >
               {todo.todo}
               {todo.completed && <i className="fas fa-check"/>}
              </h4>
             ))}
           </div>
       <form>
         <input
           type= 'text'
           value={this.state.newTodo}
           onChange={this.handleChange}
           placeholder='Todo...'
         />
         <button onClick={this.addTodo}>Add Todo</button>
         <button onClick={this.removeTodo}>Clear Completed</button>
       </form>
      </div>
     )
  }
}

const mapStateToProps = state => {
   //console.log('STATE from TODO mapStateToProp:', state)
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {addTodo, toggleTodo, clearCompleted})(Todo)
