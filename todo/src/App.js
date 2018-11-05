import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { addTodoAction, toggleTodoAction } from './actions';

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     todos: [],
  //   }
  // }
  inputHandler = (e) => {
    // console.log(e.target.parentNode.children[0]);
    e.preventDefault();
    if(e.target.parentNode.children[0].value !== ''){
      this.props.addTodoAction(e.target.parentNode.children[0].value, this.props.todoList.length + 1)
      e.target.parentNode.children[0].value = '';
    }
  }
  toggleCompletedHandler = (e) => {
    console.log(e.target.innerHTML);
    this.props.toggleTodoAction(e.target.innerHTML)
    if(e.target.style.textDecoration === ""){
      e.target.style.textDecoration = 'line-through'
    } else {
      e.target.style.textDecoration = ""
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List:</h1>
        <form>
          <input placeholder='... to-do' name='todo'></input>
          <button onClick={this.inputHandler}>Add To-do</button>
          <button>Clear Completed</button>
        </form>
        <ul>
          {this.props.todoList.map((x, index) => {
            return (
              <li key={index} onClick={this.toggleCompletedHandler}>
                {x.value}
              </li>
            )
          })}
        </ul>
        {/* <div>
          {this.state.todos.map(x => {
            return (
              <ul>
                {x}
              </ul>
            )
          })}
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state); 
  return { todoList: state.todos}
}
export default connect(mapStateToProps, {addTodoAction, toggleTodoAction})(App);

// export default App;
