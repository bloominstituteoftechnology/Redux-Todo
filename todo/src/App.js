import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {addTodo, toggleTodo} from './actions'; 
import {connect} from 'react-redux'; 

class App extends Component {

  newItem = event => {
    event.preventDefault(); 
    const name = this.input.value; 
    this.input.value = ''
    addTodo(name,false); 
  }
  render() {
    console.log(this.props.todo)
    const todos = this.props.todo;
    return (
      <div>
        <h1>TODO List</h1>
        <ul>
          {/* Map through the list and produce them as a li */}
          {todos.map((todo, i)=> <li onClick ={toggleTodo} key={i}>{todo.value} ---- {todo.completed.toString()}</li>)}
        </ul>
        <input id="todo" type="text" placeholder = "add todo..."
        ref={(input) => this.input = input}/>
        {/* allows us to access the input value with adding a prop */}
        <button onClick= {this.newItem}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state
  }
}

export default connect(mapStateToProps,{addTodo, toggleTodo})(App);
// The mapStateToProps function specifies which portion of the 
// state tree this component needs to receive. In this case, 
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
// const mapStateToProps = (state) => {
//   return {
//       count: state
//   };
// };

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
// export default connect(mapStateToProps, { increment, decrement})(Counter);