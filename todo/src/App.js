import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { addTodoAction } from './actions';

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     todos: [],
  //   }
  // }
  inputHandler = (e) => {
    // console.log(e.target.parentNode.children[0].value);
    e.preventDefault();
    if(e.target.parentNode.children[0].value !== ''){
      this.props.addTodoAction(e.target.parentNode.children[0].value)
      e.target.parentNode.children[0].value = '';
    }
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
        <div>
          {this.props.todoList.map(x => {
            return (
              <ul key={x.value}>
                {x.value}
              </ul>
            )
          })}
        </div>
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
export default connect(mapStateToProps, {addTodoAction})(App);

// export default App;
