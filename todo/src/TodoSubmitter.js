import React from 'react'
import { connect } from 'react-redux';
import { addTodoAction } from './actions'
import TodoMapper from './TodoMapper'

 class TodoSubmitter extends React.Component {
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

      todoSubmitterHandler = e => {
          e.preventDefault();
          this.props.addTodoAction(this.state);
          this.setState({text:''})
      };
      
      render() {
          return (
              <div>
              <form onSubmit={this.todoSubmitterHandler} >
                    <input 
                        type='text'
                        name='text'
                        required minlength='1'
                        value={this.state.todo}
                        onChange={this.inputHandler}
                    />
                    <button type='submit'>Add a ToDo!</button>                   
                </form>
                <TodoMapper todos={this.props.todos} />
              </div>
          );
      } 

}

const mapStateToProps = (state) => {
    console.log(state, 'state return')
    return { todos: state.todos};
}


export default connect(mapStateToProps, {addTodoAction})(TodoSubmitter)