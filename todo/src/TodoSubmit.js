import React from 'react'
import { connect } from 'react-redux';
import { addTodoAction } from './actions'
import TodoMap from './TodoMap'
  class TodoSubmit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          text: '',
          completed: false
         
        };
      }
    
      inputHandler = e => {
        this.setState({[e.target.name]: e.target.value});
      };
       todoSubmitHandler = e => {
          e.preventDefault();
          this.props.addTodoAction(this.state);
          this.setState({text:''})
      };
       render() {
          return (
              <div>
              <form onSubmit={this.todoSubmitHandler} >
                    <input 
                        type='text'
                        name='text'
                        value={this.state.todo}
                        onChange={this.inputHandler} 
                    />
                    <button type='submit'>Add a ToDo!</button>
              </form>
              <TodoMap todos={this.props.todos} />
              </div>
          );
      } 
 }
 const mapStateToProps = (state) => {
    console.log(state, 'state return')
    return { todos: state.todos};
}
 export default connect(mapStateToProps, {addTodoAction})(TodoSubmit) 