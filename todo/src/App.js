import React from 'react';
import './App.css';

import { connect } from 'react-redux';

const App = (props) => {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     todos: ['wash dishes','clean room'],
  //   }
  // }
  // render() {
    return (
      <div className="App">
        <h1>Todo List:</h1>
        <input placeholder='... to-do'></input>
        <button>Add To-do</button>
        <button>Clear Completed</button>
        <div>
          {props.todoList.map(x => {
            return (
              <ul key={x}>
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
  // }
}

const mapStateToProps = (state) => {
  // console.log(state); 
  return { todoList: state.todos}
}
export default connect(mapStateToProps)(App);

// export default App;
