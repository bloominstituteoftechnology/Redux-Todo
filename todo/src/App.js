import React, {Component} from "react";
import { connect } from "react-redux";
import TodoList from './components/TodoList.js';
import { addTodo, deleteTodo } from './actions';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Todo List App',
      char: '',
    }
  }

handleNameChange = event => {
  this.setState({ [event.target.name]: event.target.value});
};


handleSubmitTodo = () => {
  let nextId = Date.now();
  var todo = {
    task: this.state.char,
    id: nextId,
    completed: false
  };

  this.props.addTodo(todo);
  this.setState({char: ''});
};

render() {
  return (
    <div>
      <h1>{this.state.title}</h1>
      <input
        name='char' 
        onChange={this.handleNameChange}
        onKeyPress={
          (event) => {
            if(event.key === 'Enter'){
              this.handleSubmitTodo();
            }
          }
        }

        value={this.state.char}
        placeholder="Add Todo..."/>
        <button onClick= {this.handleSubmitTodo}>Add</button>

        <TodoList/>

    </div>
  );
}
}


const mapStateToProps = (state) => {
return {
  todos: state
}
}

export default connect(mapStateToProps, {addTodo, deleteTodo})(App);
