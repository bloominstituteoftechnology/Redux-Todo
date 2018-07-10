import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { addTodo, removeTodos} from './actions/index';
import TodoList from './containers/TodoList';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newTodo: "",
    }
  }

  handleNewTodo = (e) => {
    this.setState({newTodo: e.target.value});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My god, you've got SO MUCH TO DO!!</h1>
        </header>
        <TodoList />
        {/* <ul>
          {this.props.todos.map(todo => {
            return <StyledLI onClick={() => this.props.toggleCompleted(todo)} 
                              completed={todo.completed ? true : false}
                              key={todo.todo} >{todo.todo}</StyledLI>
          })}
        </ul>

        <form onSubmit={(e) => {e.preventDefault();
                                this.props.addTodo(this.state.newTodo)}} >
          <input type="text"
                  placeholder="Type new Todo"
                  value={this.state.newTodo}
                  onChange={this.handleNewTodo} />      
        </form> */}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return{
    todos: state.todos,
  }
}


export default connect(mapStateToProps, { addTodo, removeTodos})(App);
