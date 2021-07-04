import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addTodo, toggleComplete, deleteTodo } from './actions';
import ListWrapper from './styles/listWrapper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ''
    }
  }

  componentDidMount() {
    if(localStorage.getItem('todos') !== null && localStorage.getItem('todos') !== 'null'){
      let myTodos = JSON.parse(localStorage.getItem('todos'));
      myTodos.forEach((todo,index) => {
        this.props.addTodo(todo.todo);
        if(todo.completed){
          this.props.toggleComplete(index);
        }
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('todos',JSON.stringify(this.props.todos))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addTheTodo = ev => {
    ev.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({newTodo: ''})
  }

  toggleComplete = index => {
    this.props.toggleComplete(index);
    console.log('fired toggle')
  }

  deleteTodo = (event,index) => {
    event.stopPropagation();
    this.props.deleteTodo(index);
  }

  render() {
    return (
      <ListWrapper>
        <h1 className='list-title'>My Todo List</h1>
        <form onSubmit={this.addTheTodo}>
          <input name='newTodo' value={this.state.newTodo} 
          placeholder='add todo item' onChange={this.handleChange}/>
          <button type='submit'>Add Item</button>
        </form>
        <div className='list-items-wrapper' >
        {this.props.todos.map((todo,index) => {
          return (
            <>
          <div className='todo-item'
            onClick={()=>this.toggleComplete(index)}
            key={todo.todo}
            >
            <p className={todo.completed? 'completed-todo' : ''} >{todo.todo}</p>
            <div className='complete-and-remove'>
            <p className='complete-status'>{todo.completed? 'COMPLETED' : ''}</p>

            {todo.completed ? 
              <button onClick={(ev)=>this.deleteTodo(ev,index)}>Remove Item</button> 
              : 
              null
            }
            </div>
          </div>
          </>
          )
        })}
        </div>
      </ListWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
} 

// function mapDispatchToProps(dispatch) {
//   return {
//     addTodo: text => dispatch(addTodo(text))
//   };
// }

const withState = connect(
  mapStateToProps,
  {
    addTodo,
    toggleComplete,
    deleteTodo
  }
);

export default withState(App);
