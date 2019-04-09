import React from 'react'
import Todo from '../Todo/Todo'
import {connect} from 'react-redux'
import { addTodo } from '../../Actions'
class TodoList extends React.Component {

    state = {
        newTodo: ''
    }

   handleChanges = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
   }

   submitTodo = e => {
       e.preventDefault();
       this.props.addTodo(this.state.newTodo);
       this.setState({
           newTodo: ''
       })
   }

   render() {
    //    console.log("TodoList props:", this.props)
       return(
           <div>
               {/* map through todos*/ }
               {this.props.todos.map(todo => (
                   <Todo todo={todo}/>
               ))}
               <input 
                    type="text"
                    name="newTodo"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                    placeholder="New Todo..."
               />
               <div />
                <button onClick={this.submitTodo}>Submit Todo</button>
           </div>
       )
   }
}

const mapStateToProps = state => {
    return{
        todos: state.todos
    }
}

export default connect(
    mapStateToProps,
    {addTodo}
)(TodoList)