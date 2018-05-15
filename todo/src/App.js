import React, { Component } from 'react';
import './App.css';
import { addTodo, deleteTodo, completeTodo } from './action'
import { connect } from "react-redux";
import ToDoForm from './TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App mw8 center ba">
        <ToDoForm />
        <div className="mw-100 flex flex-wrap">
          {this.props.todos.map((e, i) => {
            console.log(e.completed)
            return (
                <div 
                  key={e.id}
                  className="ba b--dashed w4 ma2 pa2 tc" 
                  onClick={() => {this.props.completeTodo(e.id)}}
                >
                  <h4 style={e.completed ? { textDecoration: "line-through" } : { textDecoration: "none" }}> {e.value} </h4>
                  <button 
                    className={`delete ${e.completed ? `show` : `hide`}`}
                    onClick={() => {this.props.deleteTodo(e.id)}}
                  >
                    <i className="far fa-trash-alt"></i>
                  </button>
                </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, { addTodo, deleteTodo, completeTodo })(App);
