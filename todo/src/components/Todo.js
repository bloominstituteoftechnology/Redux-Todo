import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


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

  render() {
    console.log('PROPS', this.props)
    return(
      <div>
       <h2>TODO APP</h2>
        

        {this.props.todos.map((curr, index) => {
           return  (
            <div key={index}>
             {curr.todo}
           </div> 
           )
        
        })}
    
       <form>
         <input 
           type= 'text'
           value={this.state.newTodo}
           onChange={this.handleChange}
           placeholder='Todo...'
         />
         <button onClick={this.addTodo}>Add Todo</button>
       </form>
    
      </div> 
     )
  }
}

const mapStateToProps = state => {
  //console.log('STATE:', state)
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {addTodo})(Todo)