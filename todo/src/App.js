import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addTodo, toggleComplete, deleteTodo } from './actions';
import styled from 'styled-components';

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
  }

  deleteTodo = index => {
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
            {/* <button onClick={todo.completed? 
              ()=>this.deleteTodo(index)
              :
              ()=>{alert('Todos must be complete before removal')
              this.toggleComplete(index)}
            }>
                Remove Item</button> */}
            {todo.completed ? 
              <button onClick={()=>this.deleteTodo(index)}>Remove Item</button> 
            : 
              null
            }
            </div>
          </div>
          
          </>
          )
        })}
      </ListWrapper>
    );
  }
}
const ListWrapper = styled.div`
  border: 2px solid red;
  border-radius: 15px;
  box-shadow: 10px 10px 10px 0 lightgray;
  margin: 10px auto;
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: darkred;
  color: white;

  form {
    width: 90%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    input {
      width: 80%;
    }
  }

  .list-title {
    text-decoration: underline;
    font-style: italic;
  }

  .todo-item {
    border: 2px solid white;
    width: 90%;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  .todo-item:hover {
    background: white;
    color: darkred;
    border: 2px solid red;
  }
  .todo-item:active {
    background: darkred;
  }
  .todo-item p {
    margin: 5px 10px;
    font-weight: bold;
  }
  .completed-todo {
    text-decoration: line-through;
  }
  .complete-and-remove {
    display: flex;

  }
  button {
    z-index: 3;
  }

  button:hover {
    cursor: pointer;
    background: red;
    color: white;
  }
  button:active {
    background: darkred;
  }

`
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
