import React, { Component } from 'react';
import ToDoForm from "./components/ToDoForm"
import './App.css';
import Todos from './components/Todos';
//import ToDoList from './components/ToDoList';
import { connect } from 'react-redux';
import { addToDo } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
      todoList: [],
      inputText: ''
    };
  }

    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state

    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    addToDo = (e) => {
      e.preventDefault();
      const { todoText } = this.state;
      const newTodo = {
        id: this.props.todos.length + 1,
        completed: false,
        text: todoText
      };
      this.props.addToDo(newTodo);
      this.setState({ todoText: '' });
    };



  /********* Add Todo Items to Array *****/
  /* addToList = event => {
    event.preventDefault();
    //grab the current state
    let newArr = this.state.todoList;
    let newTodo = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false
    };
    newArr.push(newTodo);
    //refresh the state
    this.setState({
      todoList: newArr,
      inputText: ''
    });
  }; */

  /******** Remove Completed Items *********/
  clearComplete = event => {
    event.preventDefault();
    let newTodos = this.state.todos.slice();
    newTodos = newTodos.filter(item => {
      return item.completed === false;
    });
    //refresh the state
    this.setState({
      todos: newTodos
    });
  };

  /******* Toggle Items Upon Completion *********/
  toggleComplete = id => {
    let tempToDos = this.state.todos.slice();
    tempToDos.map(todo => {
    //  todo.id === id ? todo.completed = !todo.completed : null;
      return todo;
    });
    //refresh the state
    this.setState({ todos: tempToDos });
  };

  /******* Update User Input   ********/
  updateUserInput = event => {
    //refresh the state
    this.setState({ todoText: event.target.value });
  };

  /****** Render to Screen (React DOM) *************/
  render() {
    return (
      <div>""
     <div className="h1Container"> <h1>To Do List</h1></div>
        <div className="todoContainer">
        <Todos todos={this.props.todos} 
           /*  list={this.props.todoList} */
            id={this.state.id}
            toggleComplete={this.toggleComplete}
          />
          <ToDoForm
             handleInputChange={this.handleInputChange}
             todoText={this.state.todoText}
             addToDo={this.addToDo}
            /* addToList={this.addToList} */
            userInput={this.state.inputText}
            updateUserInput={this.updateUserInput}
            inputText={this.state.inputText}
            clearComplete={this.clearComplete}
            id={this.state.id}
          />
        </div>
      </div>
    );
  }
}

/* render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {this.props.name}</h1>
        </header>
        <TodoForm
          handleInputChange={this.handleInputChange}
          todoText={this.state.todoText}
          addTodo={this.addTodo}
        />
        <div className="App-intro">
          <ToDoList todos={this.props.todos} />
        </div>
      </div>
    );
  }
} */

const mapStateToProps = state => {
  return {
    todos: state.todos,
    name: state.name
  };
};

export default connect(mapStateToProps, { addToDo })(App);