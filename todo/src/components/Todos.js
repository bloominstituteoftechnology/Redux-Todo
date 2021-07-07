import  React  from 'react';
import { connect }  from 'react-redux';
import { addTodo, toggleCompleted } from '../actions';

class Todos extends React.Component{
  state={
    name: ''
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleAddTodo = event => {
    event.preventDefault();
    this.props.addTodo(this.state.name);
  }

  toggleCompleted = index => {
    console.log(this.props.toggleCompleted(index))
    this.props.toggleCompleted(index);
  }

  render(){
    return(
      <div>
        {this.props.todos.map((todo, index) => (
          <h2 onClick={() => this.toggleCompleted(index)} key={todo.name}>
            {todo.name}
          </h2>
        ))}

        <form onSubmit={this.handleAddTodo}>
          <input
            type='text'
            name='name'
            placeholder='New Task'
            value={this.state.name}
            autoComplete='off'
            onChange = {this.handleChanges}
          />
          <button type='submit'>
            Add To-do
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    todos: state.todos
  }
}

const withState = connect(
  mapStateToProps,
  {
    addTodo,
    toggleCompleted
  }
)

const EnhancedTodos = withState(Todos);

export default EnhancedTodos;
